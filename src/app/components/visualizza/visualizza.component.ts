import { Component, OnInit } from '@angular/core';
import { C_GRANDEZZA_TITOLO } from 'src/app/consts/costanti';
import { Articolo } from 'src/app/classes/articolo';
import { ArticoloDaoService } from 'src/app/services/articolo-dao.service';

@Component({
  selector: 'app-visualizza',
  templateUrl: './visualizza.component.html',
  styleUrls: ['./visualizza.component.css']
})
export class VisualizzaComponent implements OnInit {

  articoloDao: ArticoloDaoService;
  articolo: Articolo;
  stileTitolo = { 'font-size': C_GRANDEZZA_TITOLO, 'font-weight': 'bold', 'margin': '0' };
  classeSottotitolo: string = 'sottotitolo';

  constructor(private dao: ArticoloDaoService) {
    this.articoloDao = dao;
  }

  ngOnInit() {
    this.articolo = this.articoloDao.getArticoloHome();
  }

}
