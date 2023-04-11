import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['../../app.component.css'],
})
export class ResultadosComponent {
  constructor(private gifsservice: GifsService) {}

  get resultados() {
    return this.gifsservice.resultados;
  }
}
