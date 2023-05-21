import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-compra-ticket',
  templateUrl: './compra-ticket.component.html',
  styleUrls: ['./compra-ticket.component.css']
})
export class CompraTicketComponent {

  constructor() { }

  articuloTemporal: any = {};

  @Input() articulosArreglo: any = [];
  total: number = 0;

  ngOnInit(): void {
    this.calcularTotal();
  }

  agregarAticket() {
    this.articulosArreglo.push(this.articuloTemporal);
    this.calcularTotal();
  }

  ngOnChanges(): void {
    this.calcularTotal();
  }

  calcularTotal(): void {
    this.total = 0;
    for (let i = 0; i < this.articulosArreglo.length; i++) {
      this.total += this.articulosArreglo[i].monto;
    }

  }
}
