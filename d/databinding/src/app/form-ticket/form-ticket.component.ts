import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-form-ticket',
  templateUrl: './form-ticket.component.html',
  styleUrls: ['./form-ticket.component.css']
})
export class FormTicketComponent {

  constructor() { }

  @Output() total: number = 0;
  monto: number = 0;
  articulo: string = "";

  @Output() articuloTicket: string = "";

  articulosArreglo: any = [];

  agregarAticket(articulo: string, mon: number) {
    let articuloTemporal = {
      monto: mon,
      articulo: articulo
    }
    this.articulosArreglo.push(articuloTemporal);
  }

  ngOnInit(): void {
  }
}
