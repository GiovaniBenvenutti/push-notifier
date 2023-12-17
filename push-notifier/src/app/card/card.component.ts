import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Notification } from './../model/notification';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, AfterViewInit {
  
  @Input() notification: Notification = new Notification();
  @Output() clicado = new EventEmitter<number>();
  @Output() visto = new EventEmitter<number>();
  @ViewChild('card') card!: ElementRef;

  onButtonClick() {
    this.clicado.emit(this.notification.idnotification);
  }

  ngAfterViewInit() {
    if (this.card) {
      this.visto.emit(this.notification.idnotification);
    }
  }

  ngOnInit() {} 
  
}
