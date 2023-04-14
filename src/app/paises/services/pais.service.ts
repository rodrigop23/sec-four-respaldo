import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { PaisInterface } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

  get httpParams() {
    return new HttpParams().set(
      'fields',
      'name,capital,flag,population,region,cca2'
    );
  }

  constructor(private http: HttpClient) {}

  buscarPais(termino: string): Observable<PaisInterface[]> {
    const url = `${this.apiUrl}/name/${termino}`;

    return this.http.get<PaisInterface[]>(url, { params: this.httpParams });
  }

  buscarCapital(termino: string): Observable<PaisInterface[]> {
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<PaisInterface[]>(url, { params: this.httpParams });
  }

  getPaisporAlpha(id: string): Observable<PaisInterface> {
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<PaisInterface>(url);
  }

  getPaisporRegion(region: string): Observable<PaisInterface[]> {
    const url = `${this.apiUrl}/region/${region}`;
    return this.http
      .get<PaisInterface[]>(url, { params: this.httpParams })
      .pipe(tap(console.log));
  }
}
