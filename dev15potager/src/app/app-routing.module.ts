import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecherchelistepotagersComponent } from './recherchelistepotagers/recherchelistepotagers.component';
import { RechercheComponent } from './recherche/recherche.component';
import { ModifprofilComponent } from './modifprofil/modifprofil.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'accueil', component: AppComponent},  
  {path: 'recherchelistepotagers', component: RecherchelistepotagersComponent},
  {path: 'rechTerrain', component: RechercheComponent},
  {path: 'modifProfil', component: ModifprofilComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
