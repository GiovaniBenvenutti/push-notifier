
export class Notification {
    
  idnotification!: number;
  cardTitulo!: string;
  detalhes!: any;
  link!: string;  
  
  constructor(
    idnotification?: number,
    cardTitulo?: string,
    detalhes?: any,
    link?: string
  ) {
    this.idnotification = idnotification || 0;
    this.cardTitulo = cardTitulo || '';
    this.detalhes = detalhes || '';
    this.link = link || '';
  }
  
  toString(): string {
    return `Notification: ${this.idnotification}, ${this.cardTitulo}, 
                      ${this.detalhes}, ${this.link}`;
    }
  
}