import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Cliente } from './cliente';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private clientesUrl = 'api/clientes';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.clientesUrl)
      .pipe(
        tap(clientes => this.log('fetched heroes')),
        catchError(this.handleError('getClientes', []))
      );
  }

  /** GET hero by id. Return `undefined` when id not found */
  getHeroNo404<Data>(id: number): Observable<Cliente> {
    const url = `${this.clientesUrl}/?id=${id}`;
    return this.http.get<Cliente[]>(url)
      .pipe(
        map(heroes => heroes[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} cliente id=${id}`);
        }),
        catchError(this.handleError<Cliente>(`getCliente id=${id}`))
      );
  }

  getCliente(id: number): Observable<Cliente> {
    const url = `${this.clientesUrl}/${id}`;
    return this.http.get<Cliente>(url)
      .pipe(
        tap(_ => this.log(`fetched hero id=${id}`)),
        catchError(this.handleError<Cliente>(`getHero id=${id}`))
      );
  }

  /* GET heroes whose name contains search term */
  searchClientes(term: string): Observable<Cliente[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Cliente[]>(`${this.clientesUrl}/?nome=${term}`).pipe(
      tap(_ => this.log(`found heroes matching "${term}"`)),
      catchError(this.handleError<Cliente[]>('searchClientes', []))
    );
  }

  /** POST: add a new hero to the server */
  addCliente (cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.clientesUrl, cliente, httpOptions).pipe(
      tap((cliente: Cliente) => this.log(`added Cliente w/ id=${cliente.id}`)),
      catchError(this.handleError<Cliente>('addCliente'))
    );
  }

  /** PUT: update the hero on the server */
  updateCliente (cliente: Cliente): Observable<any> {
    return this.http.put(this.clientesUrl, cliente, httpOptions)
      .pipe(
        tap(_ => this.log(`updated hero id=${cliente.id}`)),
        catchError(this.handleError<any>('updateCliente'))
      );
    }

  /** DELETE: delete the hero from the server */
  deleteCliente (cliente: Cliente | number): Observable<Cliente> {
    const id = typeof cliente === 'number' ? cliente : cliente.id;
    const url = `${this.clientesUrl}/${id}`;

    return this.http.delete<Cliente>(url, httpOptions)
      .pipe(
        tap(_ => this.log(`deleted cliente id=${id}`)),
        catchError(this.handleError<Cliente>('deleteCliente'))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

}
