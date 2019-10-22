import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material';
import { SessionuserService } from '../sessionuser.service';

@Component({
  selector: 'app-modalmodifterrain',
  templateUrl: './modalmodifterrain.component.html',
  styleUrls: ['./modalmodifterrain.component.css']
})
export class ModalmodifterrainComponent implements OnInit {

  constructor(private http: HttpClient, private dialogRef: MatDialogRef<ModalmodifterrainComponent>, private dialog: MatDialog ,private servisession: SessionuserService) { }

  datapotager;
  userConnecte;
  terrainActif;

  ngOnInit() {

  this.userConnecte = this.servisession.userConnecte;
  
  this.http.get('http://localhost:8086/terrains/' + 1).subscribe(response => {
    this.datapotager = response;
    console.log(response);
    });
  }

  validModif(){

    this.http.put('http://localhost:8086//terrains/' + this.terrainActif.id, this.terrainActif).subscribe(data => {
  
      }, err => {console.log(err);}
      );
    /* 
    var new_nom = (<HTMLInputElement>document.getElementById("nom")).value;
    var new_adresse = (<HTMLInputElement>document.getElementById("adresse")).value;
    var new_ville = (<HTMLInputElement>document.getElementById("ville")).value;
    var new_surface = (<HTMLInputElement>document.getElementById("surface")).value;
    var new_maxUser = (<HTMLInputElement>document.getElementById("maxUser")).value;
    var new_description = (<HTMLInputElement>document.getElementById("description")).value;
    var new_hOuverture = (<HTMLInputElement>document.getElementById("hOuverture")).value;
    var new_hFermeture = (<HTMLInputElement>document.getElementById("hFermeture")).value;
  */
    
  }
  
}
