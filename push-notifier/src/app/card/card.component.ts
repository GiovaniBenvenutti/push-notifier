import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Notification } from './../model/notification';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, AfterViewInit {
  
  @Input() notification: Notification = new Notification();
  @Output() clicado = new EventEmitter<boolean>();
  @Output() visto = new EventEmitter<boolean>();
  @ViewChild('card') card!: ElementRef;

  observer!: IntersectionObserver;

  onButtonClick() {
    this.clicado.emit(true);
  }

  onVisto() {
    this.visto.emit(true);
  }

  ngOnInit() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.visto.emit(true);
        }
      });
    });
  }

  ngAfterViewInit() {
    if (this.card) {
      this.onVisto();
    }
  }
  
}
