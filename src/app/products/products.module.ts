import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { BasicsPagesComponent } from './pages/basics-pages/basics-pages.component';
import { NumbersPagesComponent } from './pages/numbers-pages/numbers-pages.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';
import { PrimeNGModule } from '../prime-ng/prime-ng.module';

@NgModule({
  declarations: [
    BasicsPagesComponent,
    NumbersPagesComponent,
    UncommonPageComponent,
  ],
  imports: [CommonModule, ProductsRoutingModule, PrimeNGModule],
})
export class ProductsModule {}
