import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { CLIENTES } from '../mock-clientes';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  selectedCliente: Cliente;
  clientes = CLIENTES;

  constructor() { }

  ngOnInit() {
  }

  onSelect(cliente: Cliente): void {
    this.selectedCliente = cliente;
  }

}
