import { FiltroArticoloType } from './../types/filtro-articolo.type';
import { Injectable } from '@angular/core';
import { Articolo } from './../classes/articolo';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { REST_URL_GET_ALL, REST_URL_POST_NEW } from
  './../consts/costanti';
@Injectable({
  providedIn: 'root'
})
export class ArticoloDaoService {
  private arrayArticoli: Articolo[];
  constructor(private httpClient: HttpClient) { }
  private handleError(error: any) {
    alert(error.message || error);
    return throwError(error.message || error);
  }
  getArticoloById(id: number): Articolo {
    if (this.arrayArticoli == null) { return null; }
    for (const articolo of this.arrayArticoli) {
      if (articolo.id === id) { return articolo; }
    }
    return null;
  }
  getArticoloHome(component: any) {
    this.getArrayArticoliFromRestProducer().subscribe(
      response => {
        component.articolo = this.arrayArticoli.length === 0 ?
          null : this.arrayArticoli[this.arrayArticoli.length - 1];
        component.articolo = component.articolo == null ?
          new Articolo() : component.articolo;
      }
    );
  }
  getArrayArticoli(component: any) {
    this.getArrayArticoliFromRestProducer().subscribe(
      response => { component.arrayArticoli = this.arrayArticoli; }
    );
  }
  getArrayArticoliFromRestProducer(): Observable<Articolo[]> {
    return this.httpClient.get<Articolo[]>(REST_URL_GET_ALL)
      .pipe(
        map(
          (response: any) => {
            let listArticolo: Articolo[];
            if (response.error == null) {
              listArticolo = response.listArticolo;
            } else {
              listArticolo = [];
              alert(response.error);
            }
            return this.fixInstances(listArticolo);
          },
          catchError(this.handleError)
        )
      );
  }
  getArrayArticoliFiltrati(filtro: FiltroArticoloType): Array<Articolo> {
    const arrayArticoliFiltrati: Array<Articolo> = [];
    const filtroLower: string = filtro.testo.toLowerCase().toString();
    for (const articolo of this.arrayArticoli) {
      if (articolo.titolo.toLowerCase().includes(filtroLower)) {
        arrayArticoliFiltrati.push(articolo);
      } else if (articolo.arraySottotitolo[1].toLowerCase().includes(filtroLower)) {
        arrayArticoliFiltrati.push(articolo);
      } else if (articolo.testo.toLowerCase().includes(filtroLower)) {
        arrayArticoliFiltrati.push(articolo);
      }
    }
    return arrayArticoliFiltrati;
  }
  fixInstances(arrayArticoliJson: Articolo[]): Articolo[] {
    const arrayArticoli: Array<Articolo> = [];
    let obj: any;
    for (obj of arrayArticoliJson) {
      const articolo: Articolo = this.newInstance(obj);
      arrayArticoli.push(articolo);
    }
    this.arrayArticoli = arrayArticoli;
    return this.arrayArticoli;
  }
  newInstance(obj: any): Articolo {
    const articolo: Articolo = new Articolo();
    articolo.id = obj.id;
    articolo.titolo = obj.titolo;
    articolo.immagine = obj.immagine;
    articolo.nomeImmagine = obj.nomeImmagine;
    articolo.arraySottotitolo = obj.arraySottotitolo;
    articolo.testo = obj.testo;
    articolo.dataPubblicazione = obj.dataPubblicazione;
    return articolo;
  }
  postNewConsumer(articoloDaInserire: Articolo) {
    this.postNewProducer(articoloDaInserire).subscribe(
      (articoloInserito: Articolo) => {
        const articolo: Articolo = this.newInstance(articoloInserito);
        this.arrayArticoli.push(articolo);
        alert('Articolo inserito con successo');
      }
    );
  }
  postNewProducer(articoloDaInserire: Articolo): Observable<Articolo> {
    return this.httpClient.post<Articolo>(
      REST_URL_POST_NEW,
      articoloDaInserire
    ).pipe(
      map(
        (articoloInserito: any) => articoloInserito.articolo,
        catchError(this.handleError)
      )
    );
  }
}
