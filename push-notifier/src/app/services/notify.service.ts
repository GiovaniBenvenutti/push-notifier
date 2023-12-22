import { Notification } from './../model/notification';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { ConexaoService } from './conexao.service';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {

  private API_NOTIFICATIONS = 'http://localhost:8090/piante/notifications';  

  constructor( 
    private http: HttpClient, 
    public conexao: ConexaoService
  ) {}

    public selecionar(): Observable<Notification[]> {
      return this.http.get<Notification[]>(this.API_NOTIFICATIONS);
    }

    public entidadeById(idnotification: number): Observable<Notification> {
      return this.http.get<Notification>(this.API_NOTIFICATIONS + '/' + idnotification).pipe();
    }

    public cadastrar(obj: Notification): Observable<Notification> {
      return this.http.post<Notification>(this.API_NOTIFICATIONS, obj);
    }

    public editar(obj: Notification): Observable<Notification> {
      return this.http.put<Notification>(this.API_NOTIFICATIONS, obj);
    }

    public remover(idnotification: number): Observable<void> {
      return this.http.delete<void>(this.API_NOTIFICATIONS + '/' + idnotification);
    }
    
    public buscar(cardTitulo: string): Observable<Notification> {
      return this.http.get<Notification>(this.API_NOTIFICATIONS);
    } 
  
}