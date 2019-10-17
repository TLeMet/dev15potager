import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import { ModaldetailpotagerComponent } from './modaldetailpotager/modaldetailpotager.component';
import { MydialogjoComponent } from './mydialogjo/mydialogjo.component';
import { MyexempledialogComponent } from './myexempledialog/myexempledialog.component';
import { MymodeljoComponent } from './mymodeljo/mymodeljo.component';

@NgModule({
  declarations: [
    AppComponent,
    PersoComponent,
    NavbarPersoComponent,
    RecherchelistepotagersComponent,
    ModaldetailpotagerComponent,
    MydialogjoComponent,
    MyexempledialogComponent,
    MymodeljoComponent,

  ],
  entryComponents: [MyexempledialogComponent, MymodeljoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
