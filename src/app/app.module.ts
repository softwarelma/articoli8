import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import { MenuComponent } from './components/menu/menu.component';
import { VisualizzaComponent } from './components/visualizza/visualizza.component';
import { RicercaRisultatiComponent } from './components/ricerca-risultati/ricerca-risultati.component';
import { CercaComponent } from './components/cerca/cerca.component';
import { RiepilogoComponent } from './components/riepilogo/riepilogo.component';
import { EditComponent } from './components/edit/edit.component';
import { PipeTestoBrPipe } from './pipes/pipe-testo-br.pipe';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ContattiComponent } from './components/contatti/contatti.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    VisualizzaComponent,
    RicercaRisultatiComponent,
    CercaComponent,
    RiepilogoComponent,
    EditComponent,
    PipeTestoBrPipe,
    ContattiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: VisualizzaComponent },
      { path: 'visualizza', component: VisualizzaComponent },
      { path: 'visualizza/:id', component: VisualizzaComponent },
      { path: 'view', redirectTo: '', pathMatch: 'full' },
      { path: 'cerca', component: CercaComponent },
      { path: 'search', redirectTo: 'cerca', pathMatch: 'full' },
      { path: 'riepilogo', component: RiepilogoComponent },
      { path: 'inserimento', component: EditComponent },
      { path: 'add', redirectTo: '/inserimento', pathMatch: 'full' },
      { path: 'insert', redirectTo: '/inserimento', pathMatch: 'full' },
      { path: 'modifica', component: EditComponent },
      { path: 'modifica/:id', component: EditComponent },
      { path: 'contatti', component: ContattiComponent },
      { path: 'contacts', redirectTo: 'contatti', pathMatch: 'full' },
      { path: '**', component: VisualizzaComponent }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
