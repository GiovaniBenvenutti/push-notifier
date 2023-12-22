import { Retorno } from './../model/retorno';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { ConexaoService } from './conexao.service';

@Injectable({
  providedIn: 'root'
})
export class RetornoService { private API_RETORNO = 'http://localhost:8090/piante/retorno';  

constructor( 
  private http: HttpClient, 
  public conexao: ConexaoService
) {
  this.ouvirStatusConexao();
}


  private salvarNaAPI(retorno: Retorno) {
    this.http.post<Retorno>(this.API_RETORNO, retorno)
      .subscribe(
        () => alert('retorno enviado para a API'),
        (err) => alert('erro ao salvar na API')
      );
  }

  private salvarNoIndexDB(retorno: Retorno) {
    alert('quero salvar' + retorno + 'no indexed-DB')
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