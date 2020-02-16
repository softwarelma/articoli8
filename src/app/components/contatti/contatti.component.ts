import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.css']
})
export class ContattiComponent implements OnInit {
  arraySesso = [
    { valore: 'M', descrizione: 'Maschile' },
    { valore: 'F', descrizione: 'Femminile' }
  ];
  arrayFonte = [
    { valore: 'seleziona', descrizione: '--Seleziona--' },
    { valore: 'google', descrizione: 'Google' },
    { valore: 'facebook', descrizione: 'Facebook' },
    { valore: 'twitter', descrizione: 'Twitter' },
    { valore: 'social', descrizione: 'Altri social' },
    { valore: 'amico', descrizione: 'Un\'amico' },
    { valore: 'altro', descrizione: 'Altro' }
  ];
  constructor() { }
  ngOnInit() { }
  submitFormContatti(formContatti: NgForm) {
    console.log('sesso=' + formContatti.controls['sesso'].value);
    console.log('nome=' + formContatti.controls['nome'].value);
    console.log('fonte=' + formContatti.controls['fonte'].value);
    console.log('capitoloIntroduzione=' +
      formContatti.controls['capitoloIntroduzione'].value);
    console.log('capitoloStruttura=' +
      formContatti.controls['capitoloStruttura'].value);
    console.log('capitoloView=' +
      formContatti.controls['capitoloView'].value);
    console.log('capitoloModel=' +
      formContatti.controls['capitoloModel'].value);
    console.log('capitoloInterazione=' +
      formContatti.controls['capitoloInterazione'].value);
    console.log('capitoloNavigazione=' +
      formContatti.controls['capitoloNavigazione'].value);
    console.log('capitoloHttp=' +
      formContatti.controls['capitoloHttp'].value);
    console.log('capitoloForm=' +
      formContatti.controls['capitoloForm'].value);
    console.log('commento=' + formContatti.controls['commento'].value);
    console.log('\n');
    const bottoneReset: HTMLElement =
      document.getElementById('bottoneReset') as HTMLElement;
    bottoneReset.click();
    alert('Grazie di averci contattato!!');
  }
}
