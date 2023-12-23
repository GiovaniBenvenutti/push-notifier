import { Retorno } from './../model/retorno';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { ConexaoService } from './conexao.service';
import Dexie from 'dexie';

@Injectable({
  providedIn: 'root'
})
export class RetornoService {
  
  private API_RETORNO = 'http://localhost:8090/piante/retorno';  
  private indexdDB: Dexie | undefined;
  private table: Dexie.Table<Retorno, any> | undefined;

  constructor( 
    private http: HttpClient, 
    public conexao: ConexaoService
  ) {
    this.ouvirStatusConexao();
    this.iniciarIndexedDB();
  }

  private iniciarIndexedDB() {
    this.indexdDB = new Dexie('db-retorno');
    this.indexdDB.version(1).stores({
      retorno: 'idretorno'
    });
    this.table = this.indexdDB.table('retorno');
  }




  private salvarNaAPI(retorno: Retorno) {
    this.http.post<Retorno>(this.API_RETORNO, retorno)
      .subscribe(
        () => console.log('retorno enviado para a API'),
        (err) => console.log('erro ao salvar na API')
      );
  }

  private async salvarNoIndexDB(retorno: Retorno) {
    try {  
      await this.table?.add(retorno);
      const todosRetornos = await this.table?.toArray();
      console.log('retornos salvos: ', todosRetornos);
    } catch {
      alert('erro ao salvar no indexedDB');      
    }
  }

  private async enviarIndexedDBparaAPI() {    
    const todosRetornos = await this.table?.toArray();
    if (todosRetornos) {
      for (const retorno of todosRetornos) {
        this.salvarNaAPI(retorno);
        await this.table?.delete(retorno.idretorno);
        alert('banco local apagado');
      }
    }
  }





  public salvar(retorno: Retorno) {
    if (this.conexao.isOnline) {
      this.salvarNaAPI(retorno);
    } else {
      this.salvarNoIndexDB(retorno);
    }
  }

  private ouvirStatusConexao() {
    this.conexao.statusConexao
    .subscribe(online => {
      if (online) {
        this.enviarIndexedDBparaAPI();
        console.log('estou on-line, vou enviar do banco local pra api');
      } else {
        console.log('estou off-line, vou salvar no banco local');
      }
    })
  }


  
  /* ************************************************************************ */







  public cadastrar(obj: Retorno): Observable<Retorno> {
    return this.http.post<Retorno>(this.API_RETORNO, obj);
  }

  public selecionar(): Observable<Retorno[]> {
    return this.http.get<Retorno[]>(this.API_RETORNO);
  }

  public entidadeById(idretorno: number): Observable<Retorno> {
    return this.http.get<Retorno>(this.API_RETORNO + '/' + idretorno).pipe();
  }

  public editar(obj: Retorno): Observable<Retorno> {
    return this.http.put<Retorno>(this.API_RETORNO, obj);
  }

  public remover(idretorno: number): Observable<void> {
    return this.http.delete<void>(this.API_RETORNO + '/' + idretorno);
  }
  
  public buscar(idnotification: number): Observable<Retorno> {
    return this.http.get<Retorno>(this.API_RETORNO);
  } 

}