import { RetornoService } from './../services/retorno.service';
import { NotifyService } from './../services/notify.service';
import { Component, } from '@angular/core';
import { Notification } from './../model/notification';
import { Retorno } from '../model/retorno';



@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent {

  notification: Notification = new Notification();
  notificationArray: Notification[] = []; 

  retorno: Retorno = new Retorno();
  //retornoArray: Retorno[] = [];
  
  constructor(
    public notifyService: NotifyService, 
    public retornoService: RetornoService
  ) {};
    
  selecionar(): void {
    this.notifyService.selecionar()
    .subscribe(retorno => this.notificationArray = retorno);
  } 

  clicado(click: number) {
    if(click) {
      this.retorno.clicado = true;
      this.retorno.idnotification = click;
      this.retorno.recebimento = new Date();
      this.enviaRetorno();
    }
  }
  
  visto(viu: number){
    if (viu) {
      this.retorno.visto = true;
      this.retorno.idnotification = viu;
      this.retorno.recebimento = new Date();
      this.enviaRetorno();  
    }
  }

  enviaRetorno(): void {
    this.retornoService.salvar(this.retorno);
    this.retorno = new Retorno();
  } 
  
  ngOnInit() {
    this.selecionar();
  }
  
}