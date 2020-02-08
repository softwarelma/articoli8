import { Component, OnInit } from '@angular/core';
import { FiltroArticoloType } from 'src/app/types/filtro-articolo.type';

@Component({
  selector: 'app-ricerca-risultati',
  templateUrl: './ricerca-risultati.component.html',
  styleUrls: ['./ricerca-risultati.component.css']
})
export class RicercaRisultatiComponent implements OnInit {

  _ricercaModel: string;

  constructor() { }

  ngOnInit() {
  }

  cerca() {
    let filtro: FiltroArticoloType = { testo: this._ricercaModel };
    // alert('filtro=' + filtro.testo);
    console.log('filtro=' + filtro.testo);
  }

  get ricercaModel(): string {
    return this._ricercaModel;
  }

  set ricercaModel(valore: string) {
    this._ricercaModel = valore;
  }

}
