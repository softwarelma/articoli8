import { ArticoloDaoService } from './../../services/articolo-dao.service';
import { Articolo } from 'src/app/classes/articolo';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  inserimentoModifica: string = 'Inserimento/Modifica';
  inserisciSalvaModifiche: string = 'Inserisci/Salva modifiche';
  titoloModel: string;
  files: any[];
  urlImmagine: string;
  nomeImmagine: string;
  sottotitoloModel: string;
  arraySottotitolo: Array<string> = [];
  testoModel: string;
  id: number;
  articolo: Articolo;
  constructor(private dao: ArticoloDaoService,
    private activatedRoute: ActivatedRoute) {
    this.id = +this.activatedRoute.snapshot.paramMap.get('id');
  }
  ngOnInit() {
    this.inserimentoModifica = this.id === 0 ? 'Inserimento' : 'Modifica';
    this.inserisciSalvaModifiche = this.id === 0 ? 'Inserisci' : 'Salva modifiche';
    if (this.id !== 0) {
      this.articolo = this.dao.getArticoloById(this.id);
      this.titoloModel = this.articolo.titolo;
      this.urlImmagine = this.articolo.immagine;
      this.nomeImmagine = this.articolo.nomeImmagine;
      this.arraySottotitolo = Object.assign([], this.articolo.arraySottotitolo);
      this.testoModel = this.articolo.testo;
    }
  }
  salva() {
    if (!this.isArticoloValido()) { return; }
    if (this.id === 0) { this.articolo = new Articolo(); }
    this.articolo.titolo = this.titoloModel;
    this.articolo.immagine = this.urlImmagine;
    this.articolo.nomeImmagine = this.nomeImmagine;
    this.articolo.arraySottotitolo = this.arraySottotitolo;
    this.articolo.testo = this.testoModel;
    if (this.id === 0) {
      this.dao.postNewConsumer(this.articolo);
      this.articolo = new Articolo();
      this.titoloModel = null;
      this.files = null;
      this.urlImmagine = null;
      this.nomeImmagine = null;
      this.sottotitoloModel = null;
      this.arraySottotitolo = [];
      this.testoModel = null;
      this.id = 0;
    }
  }
  aggiungiSottotitolo() {
    if (this.sottotitoloModel == null || this.sottotitoloModel.length < 10) {
      alert('Introdurre un sottotitolo di almeno 10 caratteri');
      return;
    }
    this.arraySottotitolo.push(this.sottotitoloModel);
    this.sottotitoloModel = null;
  }
  caricaImmagine(event) {
    this.files = event.target.files;
    const reader: FileReader = new FileReader();
    if (this.files[0] == null) { return; }
    reader.readAsDataURL(this.files[0]);
    reader.onload = (event2: any) => {
      this.urlImmagine = event2.target.result;
      // this.urlImmagine = reader.result as string;
      this.nomeImmagine = this.files[0].name;
    };
  }
  isArticoloValido(): boolean {
    if (this.titoloModel == null || this.titoloModel.length < 4) {
      alert('Introdurre un titolo di almeno 4 caratteri'); return false;
    }
    if (this.urlImmagine == null || this.urlImmagine.length === 0) {
      alert('Scegliere un\'immagine'); return false;
    }
    if (this.nomeImmagine == null || this.nomeImmagine.length === 0) {
      alert('Scegliere un\'immagine'); return false;
    }
    if (this.arraySottotitolo == null || this.arraySottotitolo.length < 2) {
      alert('Introdurre almeno 2 sottotitoli'); return false;
    }
    if (this.testoModel == null || this.testoModel.length < 20) {
      alert('Introdurre un testo di almeno 20 caratteri'); return false;
    }
    return true;
  }
}