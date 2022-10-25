import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResalumPageRoutingModule } from './resalum-routing.module';

import { ResalumPage } from './resalum.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResalumPageRoutingModule
  ],
  declarations: [ResalumPage]
})
export class ResalumPageModule {}
