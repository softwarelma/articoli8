import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  inserimentoModifica: string =
    'Inserimento/Modifica';
  inserisciSalvaModifiche: string =
    'Inserisci/Salva modifiche';
  titoloModel: string;
  files: any[];
  urlImmagine: string;
  nomeImmagine: string;

  constructor() { }

  ngOnInit() {
  }

  caricaImmagine(event) {
    this.files = event.target.files;
    const reader: FileReader = new FileReader();
    if (this.files[0] == null) {
      return;
    }
    reader.readAsDataURL(this.files[0]);
    reader.onload = (event2: any) => {
      this.urlImmagine = event2.target.result;
      // this.urlImmagine = reader.result as string;
      this.nomeImmagine = this.files[0].name;
    };
  }

  salva() {
    alert('titoloModel=' + this.titoloModel);
    console.log('titoloModel=' + this.titoloModel);
  }

}
