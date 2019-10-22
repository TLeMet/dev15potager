import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SessionuserService } from '../sessionuser.service';
<<<<<<< HEAD
import { Router } from '@angular/router';
import { StockageterrainService } from '../stockageterrain.service';
=======
import { Router, RouterEvent, RouterModule, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
>>>>>>> 15e08bc125209583b413e5dd4edb07e392ee71e6

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
  t;

<<<<<<< HEAD
  constructor(private http: HttpClient, private servisession: SessionuserService, private route: Router, private stockageterrain: StockageterrainService) { }
=======
  constructor(private http: HttpClient, private route: Router,  private servisession: SessionuserService) { }
>>>>>>> 15e08bc125209583b413e5dd4edb07e392ee71e6

  ngOnInit() {
    
    this.userConnecte = this.servisession.userConnecte;

    this.http.get('http://localhost:8086/terrainofuser/' + this.servisession.id).subscribe(response => {
      this.datarejoints = response;
      console.log(response);
    })
    this.http.get('http://localhost:8086/terrainsprop/' + this.servisession.id).subscribe(response => {
      this.dataproprio = response;
      console.log(response);
    })
    
  }

  ouvreJardin(t){
    this.stockageterrain.terrain = this.t.terrain;
    this.route.navigate(['/espacepotager']);
  }


}
