import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-ruta-usuario',
  templateUrl: './ruta-usuario.component.html',
  styleUrls: ['./ruta-usuario.component.css']
})
export class RutaUsuarioComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    //un observable puede recibir hasta 3 funcion
    const observableParametros$ = this._activatedRoute.params;
    //recien se ejecuta la funcion
    observableParametros$.subscribe(
      (parametros) => {
        console.log(parametros)
      },
      (error) => {

      },
      () => {

      }
    );
  }

}


function miFuncion() {
  return 1 + 1
}

// var a = miFuncion(); //devuelve 2
// var b = miFuncion; //devuelve la definicion de la funcion
// b() //retorna 2
