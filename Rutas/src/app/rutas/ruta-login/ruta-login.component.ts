import {Component, OnInit} from '@angular/core';
import {CredencialesService} from "../../servicios/credenciales.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ruta-login',
  templateUrl: './ruta-login.component.html',
  styleUrls: ['./ruta-login.component.css']
})
export class RutaLoginComponent implements OnInit {
  password = '';

  constructor(private _credencialesService: CredencialesService, private _router: Router) {
  }

  ngOnInit() {
  }

  // login() {
  //   this._credencialesService.login(this.password);
  //   if (this._credencialesService.estaLogeado) {
  //     //ruta home
  //     console.log('Se va a la ruta')
  //     //http://localhost:4200/#/home/usuario/1/epn
  //     const rutaHomeUsuario = [
  //       '/home',
  //       'usuario',
  //       1,
  //       'epn'
  //     ]
  //     this._router.navigate(rutaHomeUsuario)
  //   } else {
  //     //mostrar error
  //     console.log('Muestra el error')
  //     alert('Credenciales invalidas');
  //   }
  // }

  login() {
    this._credencialesService
      .login(this.password);
    const rutaHomeUsuario = [
      '/home',
      'usuario',
      1,
      'epn'
    ];
    this._router.navigate(rutaHomeUsuario);

  }
}
