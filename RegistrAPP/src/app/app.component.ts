import { Component } from '@angular/core';

interface Componente{
  icon:string;
  name:string;
  redirecTo:string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}


  componentes : Componente[] = [
    {
      icon: 'storefront-outline',
      name: 'Inicio',
      redirecTo: '/home'
    },   
    {
      icon: 'qr-code-outline',
      name: 'Asistencia',
      redirecTo: '/asistencia'
    },
    {
      icon: 'person-add-outline',
      name: 'Agregar asistencia',
      redirecTo: '/resalum'
    },
    {
      icon: 'calendar',
      name: 'Feriados',
      redirecTo: '/api'
    },
  ];
  



}