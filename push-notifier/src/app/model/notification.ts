
export class Notification {
    
  idnotification!: number;
  cardtitulo!: string;
  detalhes!: any;
  link!: string;  
  
  constructor(
    idnotification?: number,
    cardtitulo?: string,
    detalhes?: any,
    link?: string
  ) {
    this.idnotification = idnotification || 0;
    this.cardtitulo = cardtitulo || '';
    this.detalhes = detalhes || '';
    this.link = link || '';
  }
  
  toString(): string {
    return `Notification: ${this.idnotification}, ${this.cardtitulo}, 
                      ${this.detalhes}, ${this.link}`;
    }
  
}