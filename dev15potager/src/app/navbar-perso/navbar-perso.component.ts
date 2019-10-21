import { Component, OnInit, Inject } from '@angular/core';
import { ServiceRechercheterrainService } from '../service-rechercheterrain.service'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { RechercheComponent } from '../recherche/recherche.component';

@Component({
  selector: 'app-navbar-perso',
  templateUrl: './navbar-perso.component.html',
  styleUrls: ['./navbar-perso.component.css']
})
export class NavbarPersoComponent implements OnInit {

  constructor(private servi: ServiceRechercheterrainService, private http: HttpClient, private route: Router) { }
data;
  chercheTerrain(nomT) {
    this.servi.rechTerr = nomT;
    console.log(this.servi.rechTerr);
    this.http.get('http://localhost:8086/terrains/nom/' + this.servi.rechTerr).subscribe(response => {
      this.data = response;
      console.log(response);
      console.log('navbar' + this.data);

      this.servi.myDataT = response;
      this.route.navigate(['/rechTerrain']);

      }
      );
    }


  ngOnInit() {

    console.log('je suis recharger nav');
  }

}

