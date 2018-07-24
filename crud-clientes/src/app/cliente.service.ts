import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cliente } from './cliente';
import { CLIENTES } from './mock-clientes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private messageService: MessageService) { }

  getClientes(): Observable<Cliente[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('ClienteService: fetch clientes');
    return of(CLIENTES);
  }
}
