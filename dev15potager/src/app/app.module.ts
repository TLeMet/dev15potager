import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { PersoComponent } from './perso/perso.component';
import { NavbarPersoComponent } from './navbar-perso/navbar-perso.component';
=======
import { RecherchelistepotagersComponent } from './recherchelistepotagers/recherchelistepotagers.component';
>>>>>>> 7a5b02eec284eb38743e736a4394cb335ca02c76

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    PersoComponent,
    NavbarPersoComponent
=======
    RecherchelistepotagersComponent
>>>>>>> 7a5b02eec284eb38743e736a4394cb335ca02c76
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
