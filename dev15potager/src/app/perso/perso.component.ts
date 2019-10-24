import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SessionuserService } from '../sessionuser.service';
import { StockageterrainService } from '../stockageterrain.service';
import { Router, RouterEvent, RouterModule, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'espaceperso',
  templateUrl: './perso.component.html',
  styleUrls: ['./perso.component.css'],

})


export class PersoComponent implements OnInit {
  data;
  datarejoints;
  dataproprio;
  userConnecte;
  

  // tslint:disable-next-line: max-line-length
  constructor(private http: HttpClient, private servisession: SessionuserService, private route: Router, private stockageterrain: StockageterrainService) { }


  ngOnInit() {

    this.userConnecte = this.servisession.userConnecte;   // SUPPRIMER

    if(JSON.parse(localStorage.getItem('userConnecte')) == null){
      this.route.navigate(['/accueil']);
    }
    else{

    this.http.get('http://localhost:8086/terrainofuser/' + this.userConnecte.id).subscribe(response => {
      this.datarejoints = response;
      console.log(response);
    })
    //Changer la requête ici parce que c'est pas bon
    this.http.get('http://localhost:8086/terrainsprop/' + this.userConnecte.id).subscribe(response => {
      this.dataproprio = response;
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
  

}
