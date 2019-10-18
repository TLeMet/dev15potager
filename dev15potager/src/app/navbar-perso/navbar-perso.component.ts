import { Component, OnInit, Inject } from '@angular/core';
import { ServiceRechercheterrainService } from '../service-rechercheterrain.service'

@Component({
  selector: 'app-navbar-perso',
  templateUrl: './navbar-perso.component.html',
  styleUrls: ['./navbar-perso.component.css']
})
export class NavbarPersoComponent implements OnInit {

  constructor(private servi : ServiceRechercheterrainService) { }

  chercheTerrain(nomt){
    this.servi.rechTerr = nomt;
  }

 

  ngOnInit() {
  }

}

