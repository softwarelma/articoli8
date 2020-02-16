import { ArticoloDaoService } from './../../services/articolo-dao.service';
import { Component, OnInit, Input } from '@angular/core';
import { C_GRANDEZZA_TITOLO } from './../../consts/costanti';
import { Articolo } from './../../classes/articolo';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-visualizza',
  templateUrl: './visualizza.component.html',
  styleUrls: ['./visualizza.component.css']
})
export class VisualizzaComponent implements OnInit {
  @Input() articolo: Articolo;
  stileTitolo = {
    'font-size': C_GRANDEZZA_TITOLO, 'font-weight': 'bold',
    'margin': '0'
  };
  classeSottotitolo: string = 'sottotitolo';
  articoloParam: Articolo;
  constructor(private dao: ArticoloDaoService,
    private activatedRoute: ActivatedRoute) {
    const id: number = +this.activatedRoute.snapshot.paramMap.get('id');
    this.articoloParam = id == null ? null : this.dao.getArticoloById(id);
  }
  ngOnInit() {
    if (this.articoloParam != null) {
      this.articolo = this.articoloParam;
      this.articoloParam = null;
      return;
    }
    this.dao.getArticoloHome(this);
  }
  visualizzaArticolo(articolo: Articolo) {
    this.articolo = articolo;
  }
}
