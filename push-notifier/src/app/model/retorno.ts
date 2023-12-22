
export class Retorno {
    
    idretorno!: number;
    idnotification!: number;
    visto!: boolean;
    clicado!: boolean; 
    recebimento!: Date; 
    
    constructor(
      idretorno?: number,
      idnotification?: number,
      visto?: boolean,
      clicado?: boolean,
      recebimento?: Date
    ) {
      this.idretorno = idretorno || 0;
      this.idnotification = idnotification || 0;
      this.visto = visto || false;
      this.clicado = clicado || false;
      this.recebimento = recebimento || new Date();
    }
       
    
  }