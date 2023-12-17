import { Retorno } from './../model/retorno';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RetornoService { private API_RETORNO = 'http://localhost:8090/piante/retorno';  

constructor( private http: HttpClient ) {}

  public selecionar(): Observable<Retorno[]> {
    return this.http.get<Retorno[]>(this.API_RETORNO);
  }

  public entidadeById(idretorno: number): Observable<Retorno> {
    return this.http.get<Retorno>(this.API_RETORNO + '/' + idretorno).pipe();
  }

  public cadastrar(obj: Retorno): Observable<Retorno> {
    return this.http.post<Retorno>(this.API_RETORNO, obj);
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