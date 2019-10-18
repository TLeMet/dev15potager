import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
// Pour utiliser des liens http :
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersoComponent } from './perso/perso.component';
import { NavbarPersoComponent } from './navbar-perso/navbar-perso.component';
import { RecherchelistepotagersComponent } from './recherchelistepotagers/recherchelistepotagers.component';
import { DialogdetailspotagerComponent } from './dialogdetailspotager/dialogdetailspotager.component';
import { DialogconnexionComponent } from './dialogconnexion/dialogconnexion.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import { NavbarAccueilComponent } from './navbar-accueil/navbar-accueil.component';



@NgModule({
  declarations: [
    AppComponent,
    PersoComponent,
    NavbarPersoComponent,
    RecherchelistepotagersComponent,
    DialogdetailspotagerComponent,
    DialogconnexionComponent,
    NavbarAccueilComponent,

  ],
  
  entryComponents: [DialogdetailspotagerComponent, DialogconnexionComponent],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
