import { Notification } from './../model/notification';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { ConexaoService } from './conexao.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {

        //        ngrok start --config=./ngrok.yml --all

        //        http://localhost:8080

        //        http://vendamaisapp.com:8080   --> não estava carregando os dados da api

  private API_NOTIFICATIONS = environment.apiUrl + ':8080' + '/piante/notifications';  

  constructor( 
    private http: HttpClient, 
    public conexao: ConexaoService
  ) {}

    public selecionar(): Observable<Notification[]> {
      return this.http.get<Notification[]>(this.API_NOTIFICATIONS);
    }

    /*
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
    */
  
}