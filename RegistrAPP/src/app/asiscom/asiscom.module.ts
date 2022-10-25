import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsiscomPageRoutingModule } from './asiscom-routing.module';

import { AsiscomPage } from './asiscom.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsiscomPageRoutingModule
  ],
  declarations: [AsiscomPage]
})
export class AsiscomPageModule {}
