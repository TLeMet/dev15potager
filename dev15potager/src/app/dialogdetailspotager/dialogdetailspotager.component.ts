import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material';
import { DialogconnexionComponent } from '../dialogconnexion/dialogconnexion.component';
import { User } from '../model/User';
import { Terrain } from '../model/Terrain';
import { ServiceTerrainService } from '../service-terrain.service';


@Component({
  selector: 'dialogdetailspotager',
  templateUrl: './dialogdetailspotager.component.html',
  styleUrls: ['./dialogdetailspotager.component.css']
})
export class DialogdetailspotagerComponent implements OnInit {

  data;
  t: Terrain = new Terrain;
  idterrain;
  titre;
  adresse;
  nomproprio;
  image;
  description

  constructor(private http: HttpClient, private dialog: MatDialog, private servi : ServiceTerrainService) { }

  ngOnInit() {
    //Il faut d'abord récupérer l'utilisateur ou le terrain
    //Demander session back ou front
    //demander menu déroulant angular
    this.t = this.servi.terrain;
    console.log("Terrain : " +  this.t.id);

    this.titre = this.t.nom;
    this.adresse = this.t.adresse
    this.description = this.t.description
    this.nomproprio = this.t.proprietaire.nom + " " + this.t.proprietaire.prenom
  

  }

  testco(){

  }
}
