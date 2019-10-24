import { Component, OnInit, ɵConsole } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material';
import { DialogdetaildemandeComponent } from '../dialogdetaildemande/dialogdetaildemande.component';
import { ServicedemandeService } from '../servicedemande.service';
import { ModalmodifterrainComponent } from '../modalmodifterrain/modalmodifterrain.component';
import { SessionuserService } from '../sessionuser.service';
import { Conversation } from '../model/Conversation';
import { Router } from '@angular/router';

import { ModalenvoieimageComponent } from '../modalenvoieimage/modalenvoieimage.component';

@Component({
  selector: 'app-espace-potagers',
  templateUrl: './espace-potagers.component.html',
  styleUrls: ['./espace-potagers.component.css']
})
export class EspacePotagersComponent implements OnInit {

  datapotager;
  datamembres;
  datademandes;

  constructor(private http: HttpClient, private dialog: MatDialog, private route: Router, private servi: ServicedemandeService, private servisession: SessionuserService) { }
  //userConnecte;
  potagerActif = JSON.parse(localStorage.getItem("terrain"));
  visible = false;
  messages;
  images;
  newMessage = new Conversation();
  userConnecte = JSON.parse(localStorage.getItem('userConnecte'));


  ngOnInit() {

    if(JSON.parse(localStorage.getItem("userConnecte")) == null){
      this.route.navigate(['/accueil']);
    }
    else{
      this.testProprio();


      //this.userConnecte = JSON.parse(localStorage.getItem('userConnecte'));
      // mettre le terrain
      this.http.get('http://localhost:8086/terrains/' + this.potagerActif.id).subscribe(response => {
        this.datapotager = response;
        console.log(this.datapotager);
      })
      this.http.get('http://localhost:8086/acceptedofterrain/' + this.potagerActif.id).subscribe(response => {
        this.datamembres = response;
        console.log(response);
      })
      this.http.get('http://localhost:8086/requestofterrain/' + this.potagerActif.id).subscribe(response => {
        this.datademandes = response;
        //console.log(response);
      })
      this.http.get('http://localhost:8086/messageGroupe/' + this.potagerActif.id).subscribe(response => {
        this.messages = response;
        console.log("liste des messages")
        console.log(response)
      })
      this.http.get('http://localhost:8086/imageGroup/' + this.potagerActif.id).subscribe(response => {
        this.images = response;
      })
    }
  }
  
  openDemande(d){
    this.servi.id = d.user.id;
    this.servi.nom = d.user.nom;
    this.servi.prenom = d.user.prenom;
    this.servi.mail = d.user.mail;
    this.servi.tel = d.user.tel;
    this.servi.message = d.message;
    this.servi.dateDemande = d.dateDemande;
    this.servi.user = d.user;
    const mydial2 = this.dialog.open(DialogdetaildemandeComponent, {
      height: '680px',
      width: '1400px',
    });
  }

  modifDetailTerrain(){
    const mydial2 = this.dialog.open(ModalmodifterrainComponent, {
      height: '830px',
      width: '500px',
    });
  }
  
  exclureUser(to_kick){
    console.log(this.datamembres);
    this.http.delete('http://localhost:8086/del.userofterrain/'+to_kick.id+'/'+this.datapotager.id).subscribe();
    //console.log(this.datamembres);
    this.ngOnInit();
  }

  testProprio(){
    console.log("userConnecte id : " + this.userConnecte + " stockterainproprio : " + this.potagerActif.proprietaire.id );
    if (this.userConnecte.id == this.potagerActif.proprietaire.id){
      this.visible=true;

    }
  }

  

  posterMessage(){

    this.newMessage.auteur = this.userConnecte;
    this.newMessage.terrain = this.potagerActif;
    this.newMessage.image = null;
    
    const post = this.http.post('http://localhost:8086/messageGroupe/' + this.userConnecte.id +  '/'+ this.potagerActif.id, this.newMessage).toPromise()
    post.then(d => {this.ngOnInit()})
    this.ngOnInit();
   
    this.newMessage = new Conversation();
  }

  RajoutCard(){
    const mydial2 = this.dialog.open(ModalenvoieimageComponent, {
      height: '700px',
      width: '500px',
    });

    

  
  }


}
