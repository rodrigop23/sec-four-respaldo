import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { PaisInterface } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class PorPaisComponent {
  termino: string = '';
  hayError: boolean = false;
  sugeridos: PaisInterface[] = [];
  mostrarSugerencias: boolean = false;

  private _paisesSugeridos: PaisInterface[] = [];

  get paisesSugeridos() {
    return this._paisesSugeridos;
  }

  constructor(private paisService: PaisService) {}

  buscar(termino: string) {
    this.mostrarSugerencias = false;

    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarPais(this.termino).subscribe({
      next: (resp) => {
        console.log(resp);
        this._paisesSugeridos = resp;
      },
      error: (err) => {
        this.hayError = true;
        this._paisesSugeridos = [];
      },
    });
  }
  sugerencia(termino: string) {
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;
    //Crear sugerencia
    this.paisService.buscarPais(termino).subscribe({
      next: (paises) => {
        this.sugeridos = paises.splice(0, 5);
        console.log(this.sugeridos);
      },
      error: (err) => {
        this.sugeridos = [];
      },
    });
  }

  buscarSugerido(termino: string) {
    this.buscar(termino);
  }
}
