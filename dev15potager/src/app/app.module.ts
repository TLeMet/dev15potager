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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MydialogjoComponent } from './mydialogjo/mydialogjo.component';
import { MyexempledialogComponent } from './myexempledialog/myexempledialog.component';
import { MymodeljoComponent } from './mymodeljo/mymodeljo.component';
import {MatCardModule} from '@angular/material/card';
import { AccueilpersoComponent } from './accueilperso/accueilperso.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NavbarAccueilComponent } from './navbar-accueil/navbar-accueil.component';



@NgModule({
  declarations: [
    AppComponent,
    PersoComponent,
    NavbarPersoComponent,
    RecherchelistepotagersComponent,
    MydialogjoComponent,
    MyexempledialogComponent,
    MymodeljoComponent,
    AccueilpersoComponent,
    
    
    NavbarAccueilComponent,

  ],
  entryComponents: [MyexempledialogComponent, MymodeljoComponent],
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
    BrowserAnimationsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory}),
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
