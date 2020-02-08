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

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    VisualizzaComponent,
    RicercaRisultatiComponent,
    CercaComponent,
    RiepilogoComponent,
    EditComponent,
    PipeTestoBrPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
