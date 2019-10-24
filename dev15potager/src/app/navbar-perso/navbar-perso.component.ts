import { Component, OnInit, Inject } from '@angular/core';
import { ServiceRechercheterrainService } from '../service-rechercheterrain.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { ModalrechercheComponent } from '../modalrecherche/modalrecherche.component';
import { SessionuserService } from '../sessionuser.service';

@Component({
  selector: 'app-navbar-perso',
  templateUrl: './navbar-perso.component.html',
  styleUrls: ['./navbar-perso.component.css']
})
export class NavbarPersoComponent implements OnInit {

  constructor(private servi: ServiceRechercheterrainService, private servisession: SessionuserService, private http: HttpClient, private route: Router, private dialog: MatDialog) { }
data;
userConnecte;
userConnectePrenom;
datarejoints;
dataproprio;
noPotager: boolean;
noPotagerPossede: boolean;
link;

  ouvreRecherche(rechT) {
    this.servi.rechTerr = rechT;
    const mydial2 = this.dialog.open(ModalrechercheComponent, {
      height: '800px',
      width: '1400px',
    });
  }

  deconnexion() {
    localStorage.removeItem('userConnecte');
    this.route.navigate(['/accueil']);
    location.reload();
  }



  aucunPotager() {
    return this.noPotager;
  }

  aucunPotagerPossede() {
    return this.noPotagerPossede;
  }

  navEspacePotager(v) {
    localStorage.setItem('terrain', JSON.stringify(v));
    if(!("http://localhost:4200/espacepotager" === window.location.href)) {
      this.route.navigate(["/espacepotager"]);
    }
    else{
      location.reload();
    }
    
  }



  ngOnInit() {
    if(JSON.parse(localStorage.getItem("userConnecte")) != null) {
      this.userConnecte = JSON.parse(localStorage.getItem("userConnecte"));
      this.userConnectePrenom = this.userConnecte.prenom;
      
      this.http.get('http://localhost:8086/terrainofuser/' + this.userConnecte.id).subscribe(response => {
        this.datarejoints = response;
        if(this.datarejoints!=null && this.datarejoints!=''){
          this.noPotager = false;
        }
        else{
          this.noPotager = true;
        }
        console.log(response);
      })
        // Retourne les terrains tenus par le propriétaire.
        this.http.get('http://localhost:8086/terrainsprop/' + this.userConnecte.id).subscribe(response => {
          this.dataproprio = response;
          if(this.dataproprio!=null && this.dataproprio!=''){
            this.noPotagerPossede = false;
          }
          else{
            this.noPotagerPossede = true;
          }
          console.log(response);
        });
    }

  }
  

}

