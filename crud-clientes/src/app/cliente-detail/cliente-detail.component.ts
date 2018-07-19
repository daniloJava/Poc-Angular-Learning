import { Component, OnInit, Input } from '@angular/core';
import { Cliente } from '../cliente';


@Component({
  selector: 'app-cliente-detail',
  templateUrl: './cliente-detail.component.html',
  styleUrls: ['./cliente-detail.component.css']
})
export class ClienteDetailComponent implements OnInit {
  @Input() cliente: Cliente;

  constructor() { }

  ngOnInit() {
  }

}
