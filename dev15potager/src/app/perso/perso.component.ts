import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SessionuserService } from '../sessionuser.service';
import { StockageterrainService } from '../stockageterrain.service';
import { Router, RouterEvent, RouterModule, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { QuitterjardinComponent } from '../quitterjardin/quitterjardin.component';
import { empty } from 'rxjs';

@Component({
  selector: 'espaceperso',
  templateUrl: './perso.component.html',
  styleUrls: ['./perso.component.css'],

})


export class PersoComponent implements OnInit {
  data;
  datarejoints = null;
  dataproprio;
  userConnecte;
  noPotager=0;
  noPotagerPossede=0;
  

  // tslint:disable-next-line: max-line-length
  constructor(private dialog: MatDialog, private http: HttpClient, private servisession: SessionuserService, private route: Router, private stockageterrain: StockageterrainService) { }


  ngOnInit() {

    if(JSON.parse(localStorage.getItem("userConnecte")) == null){
      this.route.navigate(['/accueil']);
    }
    else{
      this.userConnecte = JSON.parse(localStorage.getItem("userConnecte"));
    
    this.http.get('http://localhost:8086/terrainofuser/' + this.userConnecte.id).subscribe(response => {
      this.datarejoints = response;
      if(this.datarejoints!=null && this.datarejoints!=''){
        this.noPotager = 0;
      }
      else{
        this.noPotager = 1;
      }
      console.log(response);
    })
    // Retourne les terrains tenus par le propriétaire.
    this.http.get('http://localhost:8086/terrainsprop/' + this.userConnecte.id).subscribe(response => {
      this.dataproprio = response;
      if(this.dataproprio!=null && this.dataproprio!=''){
        this.noPotagerPossede = 0;
      }
      else{
        this.noPotagerPossede = 1;
      }
      console.log(response);
    });
  }
  }

  ouvreJardinUser(t){
    this.stockageterrain.terrain = t.terrain;
    console.log(this.stockageterrain.terrain);
    this.route.navigate(['/espacepotager']);
    console.log("On est sensé partir");
  }

  ouvreJardinProp(t){
    this.stockageterrain.terrain = t;
    this.route.navigate(['/espacepotager']);

  }

  ouvreQuitter(t){
    this.stockageterrain.terrain = t.terrain;
    const mydial = this.dialog.open(QuitterjardinComponent, {
      height: '280px',
      width: '350px',
    });
  }

  aucunPotager() {
    if(this.noPotager == 1){
      return true;
    }
    else{
      return false;
    }
  }

  aucunPotagerPossede() {
    if(this.noPotagerPossede == 1){
      return true;
    }
    else{
      return false;
    }
  }

}
