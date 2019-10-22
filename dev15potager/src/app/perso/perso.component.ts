import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SessionuserService } from '../sessionuser.service';
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

  constructor(private http: HttpClient, private route: Router,  private servisession: SessionuserService) { }

  ngOnInit() {
    
    this.userConnecte = this.servisession.userConnecte;

    // Il faudra mettre l'id du gars connecté
    this.http.get('http://localhost:8086/terrainofuser/' + 1).subscribe(response => {
      this.datarejoints = response;
      console.log(response);
    })
    this.http.get('http://localhost:8086/terrainsprop/' + 1).subscribe(response => {
      this.dataproprio = response;
      console.log(response);
    })
    
  }

  ouvreJardin(t){
      //Aller à la page du jardin dédiée
  }


}
