import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'push-notifier';

  constructor(private router: Router, private swUpDate: SwUpdate){}

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
  }
  
  navigateTo(route: string) {
    this.router.navigate([route]);    
  }    




}