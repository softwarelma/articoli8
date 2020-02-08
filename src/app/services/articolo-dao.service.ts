import { Injectable } from '@angular/core';
import { Articolo } from '../classes/articolo';

@Injectable({
  providedIn: 'root'
})
export class ArticoloDaoService {

  arrayArticoli: Array<Articolo> = [];

  constructor() {
    let articolo: Articolo;
    articolo = new Articolo();
    articolo.titolo = 'GitHub';
    articolo.immagine = 'assets/github.png';
    articolo.arraySottotitolo = [
      'Fonte: https://it.wikipedia.org/wiki/GitHub',
      'GitHub è un servizio di hosting per...'
    ];
    articolo.testo = 'Descrizione\nIl sito è principalmente...';
    articolo.dataPubblicazione = new Date(2015, 5, 30, 16, 51, 42);
    this.arrayArticoli.push(articolo);
    this.arrayArticoli.push(articolo);
    this.arrayArticoli.push(articolo);
    this.arrayArticoli.push(articolo);
    this.arrayArticoli.push(articolo);
  }

  getArticoloHome(): Articolo {
    return this.arrayArticoli[this.arrayArticoli.length - 1];
  }

  getArrayArticoli(): Array<Articolo> {
    return this.arrayArticoli;
  }

}
