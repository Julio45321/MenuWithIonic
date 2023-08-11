import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MariscosPage } from './mariscos.page';

const routes: Routes = [
  {
    path: '',
    component: MariscosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MariscosPageRoutingModule {}
