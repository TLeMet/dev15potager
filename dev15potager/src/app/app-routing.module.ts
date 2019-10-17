import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersoComponent } from './perso/perso.component';
import { NavbarPersoComponent } from './navbar-perso/navbar-perso.component';
import { RecherchelistepotagersComponent } from './recherchelistepotagers/recherchelistepotagers.component';

const routes: Routes = [
  {path: 'recherchelistepotagers', component: RecherchelistepotagersComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
