import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// Pour utiliser des liens http :
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingkebabComponent } from './bindingkebab/bindingkebab.component';
import { AttributacosComponent } from './attributacos/attributacos.component';
import { FooterComponent } from './footer/footer.component';
import { DirectiveburgerComponent } from './directiveburger/directiveburger.component';
import { PipesaucisseComponent } from './pipesaucisse/pipesaucisse.component';
import { UsersushiComponent } from './usersushi/usersushi.component';
import { UserbananeComponent } from './userbanane/userbanane.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    BindingkebabComponent,
    AttributacosComponent,
    FooterComponent,
    DirectiveburgerComponent,
    PipesaucisseComponent,
    UsersushiComponent,
    UserbananeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
