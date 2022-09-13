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
      icon: 'person-outline',
      name: 'Iniciar Sesion',
      redirecTo: '/login'
    },
    {
      icon: 'person-add-outline',
      name: 'Registrarse',
      redirecTo: '/registro'
    },
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
      icon: 'close-circle-outline',
      name: 'Cerrar Sesion',
      redirecTo: '/'
    },
  ];
  



}