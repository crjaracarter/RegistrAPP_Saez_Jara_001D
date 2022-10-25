import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

export interface Datos{
  id : number;
  usuario : string;
  tipo : string; 
  modified : number;
}

const ITEMS_KEY = 'my-datos'; 

@Injectable({
  providedIn: 'root'
})

export class ServicesdatosService {

  private _storage : Storage;
       
  constructor(private storage: Storage) { 
    this.init();
  }

//metodo de creacion de almacenamiento
async init(){
  const storage = await this.storage.create();
  this._storage = storage;
}

//metodo de add datos
async addDatos(dato: Datos):Promise<any>{
  return this.storage.get(ITEMS_KEY).then((datos : Datos[])=>{
    if (datos) {
      datos.push(dato);
      return this.storage.set(ITEMS_KEY, datos);
    }else {
      return this.storage.set(ITEMS_KEY, [dato]);
    }
  })
}

//metodo leer
getDatos(): Promise<Datos[]>{
  return this.storage.get(ITEMS_KEY);
}

//metodo actualizar
async updateDatos(dato: Datos): Promise<any>{
  return this.storage.get(ITEMS_KEY).then((datos : Datos[])=>{
    if (!datos || datos.length == 0){
      return null;
    }
    let newDato: Datos[] = [];
    for(let i of datos){
      if (i.id === dato.id){
        newDato.push(dato);
      }
      else{
        newDato.push(i);
      }
    }
    return this.storage.set(ITEMS_KEY, newDato);
  });
}

//metodo eliminar
async deleteDatos(id: number): Promise<Datos>{
  return this.storage.get(ITEMS_KEY).then((datos : Datos[])=>{
    if (!datos || datos.length === 0){
      return null;
    }
    let toKeep: Datos[] = [];
    for (let i of datos){
      if (i.id !== id){
        toKeep.push(i);
      }
    }
    return this.storage.set(ITEMS_KEY, toKeep);
  })
}

}
