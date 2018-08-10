import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const clientes = [
      { id: 11, nome: 'Mr. Nice' },
      { id: 12, nome: 'Narco' },
      { id: 13, nome: 'Bombasto' },
      { id: 14, nome: 'Celeritas' },
      { id: 15, nome: 'Magneta' },
      { id: 16, nome: 'RubberMan' },
      { id: 17, nome: 'Dynama' },
      { id: 18, nome: 'Dr IQ' },
      { id: 19, nome: 'Magma' },
      { id: 20, nome: 'Tornado' }
    ];
    return {clientes};
  }
}