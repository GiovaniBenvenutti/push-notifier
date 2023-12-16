import { NotifyService } from './../services/notify.service';
import { Component, } from '@angular/core';
import { Notification } from './../model/notification';


@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent {

  notification: Notification = new Notification();

  notificationArray: Notification[] = []; 
  
  constructor(public notifyService: NotifyService) {};
  

  
  selecionar(): void {
    this.notifyService.selecionar()
    .subscribe(retorno => this.notificationArray = retorno);
  } 


  /*


  entidadeEscolhida(ent: Entidade) {
    this.entidade = ent;
    this.btnCadastro = false;
    this.tabela = false;
    console.log(this.entidade);
  }
 

  cadastrar(): void {
    this.servicoEntidade.cadastrar(this.entidade)
    .subscribe(retorno => {
      this.entidadesArray.push(retorno);
      this.entidade = new Entidade();
      alert('Entidade cadastrada com sucesso !');      
      this.selecionar();
    });
  }

  buscar(): void {
    this.servicoEntidade.buscar(this.entidade.razaosocial)
      .subscribe(retorno => {
        if (retorno) {
          const posicao = this.entidadesArray.findIndex(entidade => 
            entidade.razaosocial === this.entidade.razaosocial);
          if (posicao >=0){  
          this.selecionarEntidade(posicao);
          alert('Entidade encontrada');
          } else {             
            alert('Entidade não encontrada');
            this.entidade.razaosocial = "";
          }
        } 
      });
  }

  selecionarEntidade(posicao: number): void {
    this.entidade = this.entidadesArray[posicao];
    this.btnCadastro = false;
    this.tabela = false;
  }

  editar(): void {
    this.servicoEntidade.editar(this.entidade)
    .subscribe(retorno => {
      this.entidade = new Entidade();
      this.btnCadastro = true;
      this.tabela = true;
      alert('Entidade editada com sucesso !');
    });
  }

  entActived: boolean = this.entidade.active;

  softDelete(): void {
    this.servicoEntidade.editar(this.entidade)
    .subscribe(retorno => {
        if(!this.entidade.active){          
          this.entidade.active = true;
          this.entActived = !this.entActived;
        } else {          
          this.entidade.active = false;
          this.entActived = !this.entActived;
        }
      this.editar();
    });
  }

  // HARD DELETE DEVE SER UMA OPÇÃO APENAS PARA O DESENVOLVEDOR //
  remover(): void {
    this.servicoEntidade.remover(this.entidade.identidade)
    .subscribe(retorno => {
      let posicao = this.entidadesArray.findIndex(obj => {
        return obj.identidade == this.entidade.identidade;
      });

      this.entidadesArray.splice(posicao, 1);
      this.entidade = new Entidade();
      this.btnCadastro = true;
      this.tabela = true;
      alert('Entidade excluida com sucesso !');        
      this.selecionar();    
    });
  }

  cancelar(): void {
    this.entidade = new Entidade();
    this.btnCadastro = true;
    this.tabela = true;    
    this.selecionar();
  }




  */

  ngOnInit() {
    this.selecionar();
  }
}