import { ArticoloLight } from '../interfaces/articolo-light';

export class Articolo implements ArticoloLight {

    id: number;
    titolo: string;
    immagine: string;
    nomeImmagine: string;
    arraySottotitolo: Array<string>;
    testo: string;
    dataPubblicazione: Date;

    getTitoloLight(): string {
        return this.titolo.substring(0, 4);
    }
    getSottotitoloLight(): string {
        return this.arraySottotitolo[1].substring(0, 10);
    }
    getTestoLight(): string {
        return this.testo.substring(0, 20);
    }
    getDataPubblicazioneLight(): Date {
        return this.dataPubblicazione;
    }
}