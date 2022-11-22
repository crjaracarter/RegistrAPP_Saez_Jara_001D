import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TomasistenciaPageRoutingModule } from './tomasistencia-routing.module';
import { QRCodeModule } from 'angularx-qrcode';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';




import { TomasistenciaPage } from './tomasistencia.page';

const startScan = async () => {
  // Check camera permission
  // This is just a simple example, check out the better checks below
  await BarcodeScanner.checkPermission({ force: true });

  // make background of WebView transparent
  // note: if you are using ionic this might not be enough, check below
  BarcodeScanner.hideBackground();

  const result = await BarcodeScanner.startScan(); // start scanning and wait for a result

  // if the result has content
  if (result.hasContent) {
    console.log(result.content); // log the raw scanned content
  }
  const stopScan = () => {
    BarcodeScanner.showBackground();
    BarcodeScanner.stopScan();
  };
  
};



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QRCodeModule,
    TomasistenciaPageRoutingModule
  ],
  declarations: [TomasistenciaPage]
})
export class TomasistenciaPageModule {}
