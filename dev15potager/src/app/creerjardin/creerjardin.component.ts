import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Terrain } from '../model/Terrain';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material';
import { DialogjardincreeComponent } from '../dialogjardincree/dialogjardincree.component';

@Component({
  selector: 'creerjardin',
  templateUrl: './creerjardin.component.html',
  styleUrls: ['./creerjardin.component.css']
})
export class CreerjardinComponent implements OnInit {

  options: FormGroup;
  nouvTerrain: Terrain = new Terrain();
  varhOuverture;
  varhFermeture;
  userConnecte;

  constructor(private dialog: MatDialog, fb: FormBuilder, private route: Router, private http: HttpClient) {
    this.options = fb.group({
      floatLabel: 'auto',
    });
   }


  ngOnInit() {
    if(JSON.parse(localStorage.getItem("userConnecte")) == null){
      this.route.navigate(['/accueil']);
    }
    else{
      this.userConnecte = JSON.parse(localStorage.getItem("userConnecte"));
    }
  }

  creationTerrain() {
    console.log("creationTerrain()");

    this.nouvTerrain.proprietaire = this.userConnecte;
    // Formater les dates;
    this.nouvTerrain.id = null;
    this.nouvTerrain.type = null;
    this.nouvTerrain.hOuverture = this.varhOuverture + ":00";
    this.nouvTerrain.hFermeture = this.varhFermeture + ":00";

    console.log("nouvTerrain : " + this.nouvTerrain.toString());

    const co = this.http.post('http://localhost:8086/terrains', this.nouvTerrain ).toPromise();
    console.log("toPromise() fait.");

    co.then(
    response => {
      console.log("On est entrés dans le then.");

    })
    console.log("Fin de creationTerrain().");

    this.route.navigate(['/espaceperso']);
    
    const mydial2 = this.dialog.open(DialogjardincreeComponent, {
      height: '500px',
      width: '500px',
    });

      
  }

}
