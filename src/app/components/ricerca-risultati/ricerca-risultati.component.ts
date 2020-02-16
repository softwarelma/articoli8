import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FiltroArticoloType } from 'src/app/types/filtro-articolo.type';
import { ArticoloDaoService } from 'src/app/services/articolo-dao.service';
import { Articolo } from 'src/app/classes/articolo';

@Component({
  selector: 'app-ricerca-risultati',
  templateUrl: './ricerca-risultati.component.html',
  styleUrls: ['./ricerca-risultati.component.css']
})
export class RicercaRisultatiComponent implements OnInit {

  @Output() articoloSelezionato: EventEmitter<Articolo> = new EventEmitter<Articolo>();
  _ricercaModel: string;
  articoloDao: ArticoloDaoService;
  arrayArticoliFiltrati: Array<Articolo>;

  constructor(private dao: ArticoloDaoService) {
    this.articoloDao = dao;
  }

  ngOnInit() { }

  cerca() {
    const filtro: FiltroArticoloType = { testo: this._ricercaModel };
    this.arrayArticoliFiltrati =
      this.articoloDao.getArrayArticoliFiltrati(filtro);
  }

  get ricercaModel(): string {
    return this._ricercaModel;
  }

  set ricercaModel(valore: string) {
    this._ricercaModel = valore;
  }

  selezionaArticolo(articolo: Articolo) {
    console.log(articolo.titolo);
    this.articoloSelezionato.emit(articolo);
  }

}
