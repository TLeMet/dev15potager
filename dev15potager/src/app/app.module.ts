import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { PersoComponent } from './perso/perso.component';
import { NavbarPersoComponent } from './navbar-perso/navbar-perso.component';
=======
import { RecherchelistepotagersComponent } from './recherchelistepotagers/recherchelistepotagers.component';
<<<<<<< HEAD
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
=======
>>>>>>> 7a5b02eec284eb38743e736a4394cb335ca02c76
>>>>>>> 4f8849e0000485c45258287ae66a37d67166ebf2

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
    RecherchelistepotagersComponent,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
