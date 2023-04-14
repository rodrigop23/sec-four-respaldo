import { Component } from '@angular/core';
import { PaisInterface } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [],
})
export class PorCapitalComponent {
  termino: string = '';
  hayError: boolean = false;

  private _paisesSugeridos: PaisInterface[] = [];

  get paisesSugeridos() {
    return this._paisesSugeridos;
  }

  constructor(private paisService: PaisService) {}

  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarCapital(this.termino).subscribe({
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
    //Crear sugerencia
  }
}
