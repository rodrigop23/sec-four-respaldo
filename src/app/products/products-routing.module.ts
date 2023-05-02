import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicsPagesComponent } from './pages/basics-pages/basics-pages.component';
import { NumbersPagesComponent } from './pages/numbers-pages/numbers-pages.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';

const routes: Routes = [
  {
    path: '',
    component: BasicsPagesComponent,
  },
  {
    path: 'number',
    component: NumbersPagesComponent,
  },
  {
    path: 'uncommon',
    component: UncommonPageComponent,
  },
  {
    path: '**',
    redirectTo: 'basics',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
