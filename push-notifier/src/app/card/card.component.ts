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

  ngAfterViewInit() {
    if (this.card && this.card.nativeElement) {
      this.observer.observe(this.card.nativeElement);
    }
  }
  
  
  ngOnInit() {
    // Inicialização da propriedade 'observer'
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('viewed');
          console.log('Card visualizado:', entry.target);
          this.observer.unobserve(entry.target);
          this.visto.emit(true);
        }
      });
    });
  }

    
  
}
