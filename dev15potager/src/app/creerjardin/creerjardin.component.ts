import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Terrain } from '../model/Terrain';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-creerjardin',
  templateUrl: './creerjardin.component.html',
  styleUrls: ['./creerjardin.component.css']
})
export class CreerjardinComponent implements OnInit {
  
  options: FormGroup;
  nouvTerrain: Terrain = new Terrain();
  userConnecte;

  constructor(fb: FormBuilder, private route: Router, private http: HttpClient) {
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

    const co = this.http.post('http://localhost:8086/terrains', this.nouvTerrain ).toPromise();


    co.then(
    response => {
      console.log("On est entrés dans le then.");
   
    })
    console.log("Jardin normalement créé.");    
  }

}
