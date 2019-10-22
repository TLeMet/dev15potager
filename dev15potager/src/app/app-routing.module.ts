import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecherchelistepotagersComponent } from './recherchelistepotagers/recherchelistepotagers.component';
import { ModifprofilComponent } from './modifprofil/modifprofil.component';
import { PersoComponent } from './perso/perso.component';
import { DialogdetaildemandeComponent } from './dialogdetaildemande/dialogdetaildemande.component';
import { AccueilComponent } from './accueil/accueil.component';

const routes: Routes = [
  
  {path: 'recherchelistepotagers', component: RecherchelistepotagersComponent},
  {path: 'espaceperso/modifprofil', component: ModifprofilComponent},
  {path: 'espaceperso', component: PersoComponent},
  {path: 'demandeAd', component: DialogdetaildemandeComponent},
  {path: 'accueil', component: AccueilComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
