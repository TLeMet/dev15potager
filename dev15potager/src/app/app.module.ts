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
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NavbarAccueilComponent } from './navbar-accueil/navbar-accueil.component';
import { FooterComponent } from './footer/footer.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';
import { FlatpickrModule } from 'angularx-flatpickr';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { CalendarComponent } from './calendar/calendar.component';
import { MatListModule} from '@angular/material/list';
import { EspacePotagersComponent } from './espace-potagers/espace-potagers.component';
import { DialogdetaildemandeComponent } from './dialogdetaildemande/dialogdetaildemande.component';
import { ModalrechercheComponent } from './modalrecherche/modalrecherche.component';
import { ModifprofilComponent } from './modifprofil/modifprofil.component';
import { ModaldetailterrainComponent } from './modaldetailterrain/modaldetailterrain.component';
import { ModalmodifterrainComponent } from './modalmodifterrain/modalmodifterrain.component';
import { AccueilComponent } from './accueil/accueil.component';
import { CreerjardinComponent } from './creerjardin/creerjardin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule, MatSelectModule } from '@angular/material';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { ModalmodifprofilComponent } from './modalmodifprofil/modalmodifprofil.component';
import { ImportimageComponent } from './importimage/importimage.component';
import { ModalwronginscriptionComponent } from './modalwronginscription/modalwronginscription.component';
import { QuitterjardinComponent } from './quitterjardin/quitterjardin.component';
import { ModalenvoieimageComponent } from './modalenvoieimage/modalenvoieimage.component';
import { DialogjardincreeComponent } from './dialogjardincree/dialogjardincree.component';



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
    EspacePotagersComponent,
    DialogdetaildemandeComponent,
    ModifprofilComponent,
    EspacePotagersComponent,
    ModalrechercheComponent,
    ModaldetailterrainComponent,
    ModalmodifterrainComponent,
    AccueilComponent,
    CreerjardinComponent,
    ModalmodifprofilComponent,
    ImportimageComponent,
    ModalwronginscriptionComponent,
    QuitterjardinComponent,
    ModalenvoieimageComponent,
    DialogjardincreeComponent,

  ],

  // tslint:disable-next-line: max-line-length
  entryComponents: [DialogdetailspotagerComponent, DialogconnexionComponent, ModalrechercheComponent, ModaldetailterrainComponent, ModalmodifterrainComponent, ModalmodifprofilComponent, ModalwronginscriptionComponent, ModalenvoieimageComponent, DialogjardincreeComponent],


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
    ReactiveFormsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    NgxMaterialTimepickerModule,


  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
