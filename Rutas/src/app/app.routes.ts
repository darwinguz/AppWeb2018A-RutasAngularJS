import {Routes} from "@angular/router";
import {HomeComponent} from "./rutas/home/home.component";
import {FaqComponent} from "./rutas/faq/faq.component";
import {NoEncontradoComponent} from "./rutas/no-encontrado/no-encontrado.component";
import {RutaUsuarioComponent} from "./rutas/ruta-usuario/ruta-usuario.component";
import {RutaPerfilComponent} from "./rutas/ruta-perfil/ruta-perfil.component";
import {AutorizacionService} from "./servicios/autorizacion.service";
import {RutaLoginComponent} from "./rutas/ruta-login/ruta-login.component";

export const RUTAS_APP: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [
      AutorizacionService
    ],
    children: [
      {
        // path: 'usuario/:usuarioID',
        path: 'usuario/:usuarioID/:universidad',
        component: RutaUsuarioComponent
      },
      {
        path: 'perfil',
        component: RutaPerfilComponent
      }
    ]
  },
  {
    path: 'logintemporal',
    component: RutaLoginComponent,
  },
  {
    path: 'faq',
    component: FaqComponent
  },
  {
    path: 'no-encontrado',
    component: NoEncontradoComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NoEncontradoComponent,
  }
];
