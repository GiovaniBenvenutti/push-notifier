
export class Retorno {
    
    idretorno!: number;
    idnotification!: number;
    visto!: boolean;
    clicado!: boolean;  
    
    constructor(
      idretorno?: number,
      idnotification?: number,
      visto?: boolean,
      clicado?: boolean
    ) {
      this.idretorno = idretorno || 0;
      this.idnotification = idnotification || 0;
      this.visto = visto || false;
      this.clicado = clicado || false;
    }
       
    
  }