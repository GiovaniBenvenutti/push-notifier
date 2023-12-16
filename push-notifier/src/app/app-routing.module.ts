
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './inicio/inicio.component';
import { NotificationsComponent } from './notifications/notifications.component';

const routes: Routes = [  
  { path : 'inicio', component: InicioComponent },
  { path : 'notifications', component: NotificationsComponent },  
  { path : '', redirectTo: 'inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
