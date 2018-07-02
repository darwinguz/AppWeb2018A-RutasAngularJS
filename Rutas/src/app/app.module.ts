import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FaqComponent} from './rutas/faq/faq.component';
import {HomeComponent} from './rutas/home/home.component';
import {NoEncontradoComponent} from './rutas/no-encontrado/no-encontrado.component';
import {RUTAS_APP} from "./app.routes";
import {RouterModule} from "@angular/router";
import {RutaUsuarioComponent} from './rutas/ruta-usuario/ruta-usuario.component';
import {RutaPerfilComponent} from './rutas/ruta-perfil/ruta-perfil.component';
import {AutorizacionService} from "./servicios/autorizacion.service";
import {CredencialesService} from "./servicios/credenciales.service";
import {RutaLoginComponent} from './rutas/ruta-login/ruta-login.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    FaqComponent,
    HomeComponent,
    NoEncontradoComponent,
    RutaUsuarioComponent,
    RutaPerfilComponent,
    RutaLoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot( //rutas
      RUTAS_APP,
      {
        useHash: true
      }
    ),
    FormsModule, //formularios, validaciones, ngmodel o two way data binding
    HttpClientModule //formularios HttpModule no xq esta deprecado
  ],
  providers: [
    AutorizacionService,
    CredencialesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
