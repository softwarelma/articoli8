import { Component, OnInit, ViewChild } from '@angular/core';
import { Articolo } from 'src/app/classes/articolo';
import { ArticoloDaoService } from './../../services/articolo-dao.service';
import { VisualizzaComponent } from '../visualizza/visualizza.component';
@Component({
  selector: 'app-cerca',
  templateUrl: './cerca.component.html',
  styleUrls: ['./cerca.component.css']
})
export class CercaComponent implements OnInit {
  articolo: Articolo;
  @ViewChild(VisualizzaComponent, { static: true }) visualizza:
    VisualizzaComponent;
  constructor(private dao: ArticoloDaoService) { }
  ngOnInit() { this.dao.getArticoloHome(this); }
  visualizzaArticolo(articolo: Articolo) {
    // this.articolo = articolo;
    this.visualizza.visualizzaArticolo(articolo);
  }
}