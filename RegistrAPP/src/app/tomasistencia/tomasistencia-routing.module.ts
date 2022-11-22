import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TomasistenciaPage } from './tomasistencia.page';

const routes: Routes = [
  {
    path: '',
    component: TomasistenciaPage
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TomasistenciaPageRoutingModule {}
