import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TomasistenciaPageRoutingModule } from './tomasistencia-routing.module';

import { TomasistenciaPage } from './tomasistencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TomasistenciaPageRoutingModule
  ],
  declarations: [TomasistenciaPage]
})
export class TomasistenciaPageModule {}
