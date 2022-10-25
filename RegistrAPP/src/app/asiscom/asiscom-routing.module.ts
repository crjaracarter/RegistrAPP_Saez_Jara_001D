import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsiscomPage } from './asiscom.page';

const routes: Routes = [
  {
    path: '',
    component: AsiscomPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsiscomPageRoutingModule {}
