import { Component, OnInit, Inject } from '@angular/core';
import { ServiceRechercheterrainService } from '../service-rechercheterrain.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { ModalrechercheComponent } from '../modalrecherche/modalrecherche.component';

@Component({
  selector: 'app-navbar-perso',
  templateUrl: './navbar-perso.component.html',
  styleUrls: ['./navbar-perso.component.css']
})
export class NavbarPersoComponent implements OnInit {

  constructor(private servi: ServiceRechercheterrainService, private http: HttpClient, private route: Router, private dialog: MatDialog) { }
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

    ouvreRecherche() {
      const mydial2 = this.dialog.open(ModalrechercheComponent, {
        height: '680px',
        width: '1400px',
      });
    }


  ngOnInit() {

  }

}

