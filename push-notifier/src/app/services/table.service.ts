import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import Dexie from 'dexie';
import { ConexaoService } from './conexao.service';

@Injectable({
  providedIn: 'root'
})
export abstract class TableService<T> {     // <T extends {id: string}>

  private indexdDB: Dexie | undefined;
  private table: Dexie.Table<T, any> | undefined;
  
  protected http: HttpClient; 
  protected conexao: ConexaoService;

  constructor(
    protected injector: Injector,
    protected urlApi: string,
    protected nomeDB: string,
    protected nomeTabela: string,
    protected id: string
  ) { 
    this.http = this.injector.get(HttpClient);
    this.conexao = this.injector.get(ConexaoService);

    this.ouvirStatusConexao();
    this.iniciarIndexedDB();
  }

  private iniciarIndexedDB() {
    this.indexdDB = new Dexie(this.nomeDB);
    this.indexdDB.version(1).stores({
      [this.nomeTabela]: this.id
    });
    this.table = this.indexdDB.table(this.nomeTabela);
  }




  private salvarNaAPI(table: T) {
    this.http.post<T>(this.urlApi, table)
      .subscribe(
        () => console.log('table enviado para a API', table),
        (err) => console.log('erro ao salvar na API', table)
      );
  }


  private async salvarNoIndexDB(table: T) {
    try {  
      await this.table?.add(table);      
      const todaTabela = await this.table?.toArray();
      console.log('dados salvos no indexedDB com sucesso !', todaTabela);
    } catch (error) {
      console.log('erro ao salvar no indexedDB', error);     
    }
  }

  private async enviarIndexedDBparaAPI() {           
    const todaTabela = await this.table?.toArray();
    if (todaTabela) {
      for (const table of todaTabela) {
        this.salvarNaAPI(table);
        //this.table!.delete([this.id]);  //
        //alert('banco local apagado');  //
      }
    }
    await this.table?.clear();
    alert('tabela apagada do indexedDB');
  }

  public salvar(table: T) {
    if (this.conexao.isOnline) {
      this.salvarNaAPI(table);
      //alert('table service chamou salvaNaApi');
    } else {
      this.salvarNoIndexDB(table);
      //alert('table service chamou salvaNoIndexedDB');
    }
  }


  private ouvirStatusConexao() {
    this.conexao.statusConexao
    .subscribe(online => {
      if (online) {
        this.enviarIndexedDBparaAPI();
        console.log('estou on-line, vou enviar do banco local pra api');        
        //alert('table service chamou enviarIndexedDB para Api');
      } else {        
        console.log('estou off-line, vou salvar no banco local');
        //alert('table service vai salvar no indexedDB...');
      }
    })
  }

}
