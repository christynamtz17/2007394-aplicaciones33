import { Component } from '@angular/core';

@Component({
  selector: 'app-compra-ticket',
  templateUrl: './compra-ticket.component.html',
  styleUrls: ['./compra-ticket.component.css']
})
export class CompraTicketComponent {
  constructor() { }

  articulo = document.getElementById("articulo");
  precio = document.getElementById("precio");

  ngOnInit(): void {
  }
}
