import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecherchelistepotagersComponent } from './recherchelistepotagers/recherchelistepotagers.component';

@NgModule({
  declarations: [
    AppComponent,
    RecherchelistepotagersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RecherchelistepotagersComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
