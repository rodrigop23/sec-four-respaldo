import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PaisInterface } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  buscarPais(termino: string): Observable<PaisInterface[]> {
    const url = `${this.apiUrl}/name/${termino}`;

    return this.http.get<PaisInterface[]>(url);
  }

  buscarCapital(termino: string): Observable<PaisInterface[]> {
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<PaisInterface[]>(url);
  }

  getPaisporAlpha(id: string): Observable<PaisInterface> {
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<PaisInterface>(url);
  }
}
