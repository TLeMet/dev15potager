import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Terrain } from '../model/Terrain';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creerjardin',
  templateUrl: './creerjardin.component.html',
  styleUrls: ['./creerjardin.component.css']
})
export class CreerjardinComponent implements OnInit {
  options: FormGroup;

  constructor(fb: FormBuilder, private route: Router) {
    this.options = fb.group({
      floatLabel: 'auto',
    });
   }

   nouvTerrain: Terrain = new Terrain();

  ngOnInit() {
  }

  creationTerrrain(nomP, villeP, adrP, surfP, desP, hOuvP , hFermP, nbUser, gps) {
    
  }

}
