import { Notification } from './../model/notification';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {

  private API_NOTIFICATIONS = 'http://localhost:9000';

  constructor(
    private http: HttpClient
  ) {}

    public selecionar(): Observable<Notification[]> {
      return this.http.get<Notification[]>(this.API_NOTIFICATIONS);
    }

    public entidadeById(idEntidade: number): Observable<Notification> {
      return this.http.get<Notification>(this.API_NOTIFICATIONS + '/' + idEntidade).pipe();
    }

    public cadastrar(obj: Notification): Observable<Notification> {
      return this.http.post<Notification>(this.API_NOTIFICATIONS, obj);
    }

    public editar(obj: Notification): Observable<Notification> {
      return this.http.put<Notification>(this.API_NOTIFICATIONS, obj);
    }

    public remover(idEntidade: number): Observable<void> {
      return this.http.delete<void>(this.API_NOTIFICATIONS + '/' + idEntidade);
    }
    
    public buscar(razaosocial: string): Observable<Notification> {
      return this.http.get<Notification>(this.API_NOTIFICATIONS);
    } 
  
}