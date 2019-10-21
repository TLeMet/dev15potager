import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecherchelistepotagersComponent } from './recherchelistepotagers/recherchelistepotagers.component';
import { ModifprofilComponent } from './modifprofil/modifprofil.component';
import { PersoComponent } from './perso/perso.component';

const routes: Routes = [
  
  {path: 'recherchelistepotagers', component: RecherchelistepotagersComponent},
  {path: 'modifProfil', component: ModifprofilComponent},
  {path: 'espacePerso', component: PersoComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
