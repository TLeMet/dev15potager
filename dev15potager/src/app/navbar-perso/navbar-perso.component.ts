import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-navbar-perso',
  templateUrl: './navbar-perso.component.html',
  styleUrls: ['./navbar-perso.component.css']
})
export class NavbarPersoComponent implements OnInit {

  constructor( private http : HttpClient) { }

data;
  terrainTrouve

  chercheTerrain(terrain){
    this.data = terrain;
    this.http.get('http://localhost:8086/terrains/nom/'+ this.data).subscribe(response => {
      this.terrainTrouve = response;
      console.log(response);

    })
  }

 

  ngOnInit() {
  }

}

