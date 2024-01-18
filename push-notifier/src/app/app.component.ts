import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwPush, SwUpdate } from '@angular/service-worker';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'push-notifier';

  constructor(
      private router: Router,
      private swUpDate: SwUpdate,

      private http: HttpClient,
      private swPush: SwPush
    ){

    //      AQUI COMECEI A IMPLANTAR O RECEBIMENTO DAS PUSH NOTIFICATION...

    this.swPush.requestSubscription({
      serverPublicKey: ''
    })
    .then(subscription => {
      console.log('usuario permitu envio de notificações');
      this.http.post('http://localhost:9000/add-subscription', subscription)
        .subscribe();
    })
    .catch(err => {
      console.error('usuario recusou o recebimento denotificações', err);
    });


  }


  subscribeToNotificationsClick(): void {
    this.swPush.notificationClicks
      .subscribe(result => {
        alert('usuario clicou na ação' + result.action);
      });
  }










    //      AQUI TERMINOU A TENTATIVA
  

  reloadCache(){
    if(this.swUpDate.isEnabled){
      this.swUpDate.available.subscribe(() =>{
        if(confirm('nova versão disponivel, atualizar?')){
          window.location.reload();
        }
      })
    }
  }

  ngOnInit(){
    this.reloadCache();
    this.subscribeToNotificationsClick();    // metodo acrecentado com o recebimento de notofocações
  }
  
  navigateTo(route: string) {
    this.router.navigate([route]);    
  }    














}


