import { Articolo } from './../../classes/articolo';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticoloDaoService } from '../../services/articolo-dao.service';
@Component({
  selector: 'app-riepilogo',
  templateUrl: './riepilogo.component.html',
  styleUrls: ['./riepilogo.component.css']
})
export class RiepilogoComponent implements OnInit {
  arrayArticoli: Array<Articolo> = [];
  constructor(private dao: ArticoloDaoService, private router: Router) { }
  ngOnInit() { this.dao.getArrayArticoli(this); }
  visualizzaArticolo(articolo: Articolo) {
    this.router.navigate(['visualizza', articolo.id]);
  }
  modificaArticolo(articolo: Articolo) {
    this.router.navigate(['modifica', articolo.id]);
  }
}