import { Component, OnInit } from '@angular/core';
import { ArticoloDaoService } from 'src/app/services/articolo-dao.service';
import { Articolo } from 'src/app/classes/articolo';

@Component({
  selector: 'app-riepilogo',
  templateUrl: './riepilogo.component.html',
  styleUrls: ['./riepilogo.component.css']
})
export class RiepilogoComponent implements OnInit {

  arrayArticoli: Array<Articolo> = [];

  constructor(private dao: ArticoloDaoService) {
  }

  ngOnInit() {
    this.arrayArticoli = this.dao.getArrayArticoli();
  }

}
