import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  constructor(private _httpClient: HttpClient) {
  }

  ngOnInit() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const observablePost$ = this._httpClient.get(url);

    console.log('INICIO')
    observablePost$.subscribe(
      (respuestaOK) => {
        console.log(respuestaOK)
      },
      (respuestaError) => {
        console.log(respuestaError)
      },
      () => {
        console.log('Completado')
      }
    );
  }

}
