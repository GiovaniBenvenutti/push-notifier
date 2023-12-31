import { Retorno } from './../model/retorno';
import { Injectable, Injector } from '@angular/core';
import { TableService } from './table.service';

@Injectable({
  providedIn: 'root'
})
export class RetornoService extends TableService<Retorno> { 

  constructor( 
    protected override injector: Injector
  ) {
    super(injector, 'retorno', 'http://localhost:8090/piante/retorno');
  }

}