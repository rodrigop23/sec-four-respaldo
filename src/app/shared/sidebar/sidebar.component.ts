import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['../../app.component.css'],
})
export class SidebarComponent {
  constructor(private gifsservice: GifsService) {}

  get historial() {
    return this.gifsservice.historial;
  }

  buscar(query: string) {
    this.gifsservice.buscarGifs(query);
  }
}
