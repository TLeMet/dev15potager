import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material';
import { DialogconnexionComponent } from '../dialogconnexion/dialogconnexion.component';

@Component({
  selector: 'dialogdetailspotager',
  templateUrl: './dialogdetailspotager.component.html',
  styleUrls: ['./dialogdetailspotager.component.css']
})
export class DialogdetailspotagerComponent implements OnInit {

  nomproprio;
  prenomproprio;
  adresseterrain;
  imageterrain;
  nompotager;
  descriptionpotager;

  constructor(private http: HttpClient, private dialog: MatDialog) { }

  ngOnInit() {
    //Il faut d'abord récupérer l'utilisateur ou le terrain
    //Demander session back ou front
    //demander menu déroulant angular


    
  }

  testco(){

  }
}
