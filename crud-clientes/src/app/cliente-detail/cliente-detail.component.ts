import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';


@Component({
  selector: 'app-cliente-detail',
  templateUrl: './cliente-detail.component.html',
  styleUrls: ['./cliente-detail.component.css']
})
export class ClienteDetailComponent implements OnInit {
  @Input() cliente: Cliente;

  constructor(
    private route: ActivatedRoute,
    private clienteService: ClienteService,
    private location: Location
    ) { }

  ngOnInit(): void {
    this.getCliente();
  }

  getCliente(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.clienteService.getCliente(id)
      .subscribe(cliente => this.cliente = cliente);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.clienteService.updateCliente(this.cliente)
      .subscribe(() => this.goBack());
  }

}
