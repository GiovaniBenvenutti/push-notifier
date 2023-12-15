import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'push-notifier';

  constructor(private router: Router) {}
  
  navigateTo(route: string) {
    this.router.navigate([route]);    
  }    

  clicado() {
    alert("seu site aqui!");
  } 


}

