import { Component, Input, OnInit } from '@angular/core';
import { Notification } from './../model/notification';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  
  @Input() notification: Notification = new Notification();

  ngOnInit() {
      
  }
  
  //detalhes: any = "sua notificação personalizada com detalhes e imagens aqui!";
  
}
