import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersoComponent } from './perso/perso.component';
import { NavbarPersoComponent } from './navbar-perso/navbar-perso.component';
import { RecherchelistepotagersComponent } from './recherchelistepotagers/recherchelistepotagers.component';



@NgModule({
  declarations: [
    AppComponent,
    PersoComponent,
    NavbarPersoComponent,
    RecherchelistepotagersComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
