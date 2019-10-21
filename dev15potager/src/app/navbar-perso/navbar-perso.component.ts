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

    ouvreRecherche(rechT) {
      this.servi.rechTerr = rechT;
      const mydial2 = this.dialog.open(ModalrechercheComponent, {
        height: '800px',
        width: '1700px',
      });
    }

  ngOnInit() {

  }

}

