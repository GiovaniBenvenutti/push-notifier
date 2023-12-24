import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'push-notifier';

  constructor(private router: Router, private updates: SwUpdate) {

    updates.available.subscribe(event => {
      updates.activateUpdate().then(() => document.location.reload());
    })
    
  }
  
  navigateTo(route: string) {
    this.router.navigate([route]);    
  }    




}

/*

  clicado() {
    alert("seu site aqui!");
  } 

*/ 