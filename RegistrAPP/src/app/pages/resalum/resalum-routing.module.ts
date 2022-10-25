import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResalumPage } from './resalum.page';

const routes: Routes = [
  {
    path: '',
    component: ResalumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResalumPageRoutingModule {}
