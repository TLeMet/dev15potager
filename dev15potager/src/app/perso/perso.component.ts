import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SessionuserService } from '../sessionuser.service';
import { Router, RouterEvent, RouterModule, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { StockageterrainService } from '../stockageterrain.service';

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

  constructor(private http: HttpClient, private servisession: SessionuserService, private route: Router, private stockageterrain: StockageterrainService) { }

  ngOnInit() {
    
    this.userConnecte = this.servisession.userConnecte;

    this.http.get('http://localhost:8086/terrainofuser/' + this.userConnecte.id).subscribe(response => {
      this.datarejoints = response;
      console.log(response);
    })
    this.http.get('http://localhost:8086/terrainsprop/' + this.userConnecte.id).subscribe(response => {
      this.dataproprio = response;
      console.log(response);
    })
    
  }

  ouvreJardin(t){
    this.stockageterrain.terrain = this.t.terrain;
    this.route.navigate(['/espacepotager']);
  }


}
