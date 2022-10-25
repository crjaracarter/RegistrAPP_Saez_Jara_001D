import { Component, OnInit, ViewChild } from '@angular/core';
import { ServicesdatosService, Datos } from '../../services/servicesdatos.service';
import { Platform, ToastController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-resalum',
  templateUrl: './resalum.page.html',
  styleUrls: ['./resalum.page.scss'],
})
export class ResalumPage implements OnInit {

  datos: Datos [] = [];
  newDato: Datos = <Datos>{};
  @ViewChild('myList')myList :IonList;

  constructor(private storageService: ServicesdatosService,
    private plt: Platform, private toastController: ToastController) {
      this.plt.ready().then(()=>{
        this.loadDatos();
      });
     }

  ngOnInit() {
  }

  //Get Datos
  loadDatos(){
    this.storageService.getDatos().then(datos=>{
      this.datos=datos;
    });
  }

  //Create Datos
  addDatos(){
    this.newDato.modified = Date.now();
    this.newDato.id = Date.now();
    this.storageService.addDatos(this.newDato).then(dato=>{
      this.newDato = <Datos>{};
      this.showToast('!Datos Agregados');
      this.loadDatos();
    });
  }

  //Update
  updateDatos(dato: Datos ){
    dato.usuario = `UPDATED: ${dato.usuario}`;
    dato.modified = Date.now();
    this.storageService.updateDatos(dato).then(item=>{
      this.showToast('Elemento actualizado!')
      this.myList.closeSlidingItems();
      this.loadDatos();
    });
  }

  //Delete
  deleteDatos(dato: Datos){
    this.storageService.deleteDatos(dato.id).then(item=>{
      this.showToast('Elemento eliminado');
      this.myList.closeSlidingItems();
      this.loadDatos();
    });
  }
  
  async showToast(msg){
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
}
