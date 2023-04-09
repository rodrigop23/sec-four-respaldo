import { NgModule } from '@angular/core';

import { ListadoComponent } from './listado/listado.component';
import { HeroeComponent } from './heroe/heroe.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ListadoComponent, HeroeComponent],
  exports: [ListadoComponent],
  imports: [CommonModule],
})
export class HeroesModule {}
