import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
// Pour utiliser des liens http :
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersoComponent } from './perso/perso.component';
import { NavbarPersoComponent } from './navbar-perso/navbar-perso.component';
import { RecherchelistepotagersComponent } from './recherchelistepotagers/recherchelistepotagers.component';
import { DialogdetailspotagerComponent } from './dialogdetailspotager/dialogdetailspotager.component';
import { DialogconnexionComponent } from './dialogconnexion/dialogconnexion.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NavbarAccueilComponent } from './navbar-accueil/navbar-accueil.component';
import { FooterComponent } from './footer/footer.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';
import { FlatpickrModule } from 'angularx-flatpickr';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { CalendarComponent } from './calendar/calendar.component';
import { RechercheComponent } from './recherche/recherche.component';
import {MatListModule} from '@angular/material/list';
<<<<<<< HEAD
import { EspacePotagersComponent } from './espace-potagers/espace-potagers.component';
=======
import { ModalrechercheComponent } from './modalrecherche/modalrecherche.component';
>>>>>>> cc5137f974d4c456439507f401738df099bd878d


@NgModule({
  declarations: [
    AppComponent,
    PersoComponent,
    NavbarPersoComponent,
    RecherchelistepotagersComponent,
    DialogdetailspotagerComponent,
    DialogconnexionComponent,
    NavbarAccueilComponent,
    FooterComponent,
    CalendarComponent,
    RechercheComponent,
<<<<<<< HEAD
    EspacePotagersComponent,
=======
    ModalrechercheComponent,
>>>>>>> cc5137f974d4c456439507f401738df099bd878d

  
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
    MatSidenavModule,
    CommonModule,
    FormsModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),   
    MatListModule,

  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
