import { Retorno } from './../model/retorno';
import { Injectable, Injector } from '@angular/core';
import { TableService } from './table.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RetornoService extends TableService<Retorno> { 

  constructor( 
    protected override injector: Injector
  ) {

    
    //        http://vendamaisapp.com:8080   --> não estava carregando os dados da api

    /*                              urlApi                   nomeDB   nomeTabela       id     */
    super(injector, ':8080/piante/retorno', 'novo-DB', 'retorno', 'recebimento');
  }

}