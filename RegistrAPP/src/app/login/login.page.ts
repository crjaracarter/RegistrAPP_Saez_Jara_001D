import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators, FormBuilder } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { RegistroserviceService, Usuario } from '../service/registroservice.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;
  formularioRegistro: FormGroup;
  usuarios : Usuario[] = [];

  constructor( private alertController: AlertController,
               private navController: NavController,
               private registroService: RegistroserviceService,
               private toastController: ToastController,
               private fb: FormBuilder,) { 
                   this.formularioLogin = this.fb.group({
                    'correo': new FormControl("",Validators.required),
                    'password': new FormControl("",Validators.required)
                        })
                     }
  ngOnInit() {
  }

  async Ingresar(){
    var f = this.formularioLogin.value;
    var a = 0;
    this.registroService.getUsuario().then(datos=>{
      this.usuarios=datos;
      if (datos.length==0)
      {
        return null;
      }

      for (let obj of this.usuarios){
        if (obj.correoUsuario == f.correo && obj.passUsuario == f.password){
          a=1;
          console.log('ingresado');
          localStorage.setItem('ingresado','true');
          this.navController.navigateRoot('home');
          this.showToast( obj.category + ' Bienvenido  ' +  obj.nomUsuario);
        }
      }
    console.log(a);
    if (a==0){
      this.alertMsg();
    }
    });
  }

  async alertMsg(){
    const alert = await this.alertController.create({
      header: 'Error..',
      message:'!Los datos ingresados no son correctos',
      buttons: ['Aceptar'],
    })
    await alert.present();
    return;
  }

  async showToast(msg){
    const toast = await this.toastController.create({
      message: msg, 
      duration: 2000
    });
    toast.present();
  }
  
}

