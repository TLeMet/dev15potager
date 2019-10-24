import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material';
import { DialogdetaildemandeComponent } from '../dialogdetaildemande/dialogdetaildemande.component';
import { ServicedemandeService } from '../servicedemande.service';
import { ModalmodifterrainComponent } from '../modalmodifterrain/modalmodifterrain.component';
import { StockageterrainService } from '../stockageterrain.service';
import { SessionuserService } from '../sessionuser.service';
import { Conversation } from '../model/Conversation';

@Component({
  selector: 'app-espace-potagers',
  templateUrl: './espace-potagers.component.html',
  styleUrls: ['./espace-potagers.component.css']
})
export class EspacePotagersComponent implements OnInit {

  datapotager;
  datamembres;
  datademandes;
  
  constructor(private http: HttpClient, private dialog: MatDialog, private servi: ServicedemandeService, private stockageterrain: StockageterrainService, private servisession: SessionuserService) { }
  userConnecte;
  potagerActif;
  visible=false;
  messages;
  images;
  newMessage = new Conversation;

  ngOnInit() {

    this.testProprio();
    
    this.potagerActif = this.stockageterrain.terrain;

    this.userConnecte = this.servisession.userConnecte;
    // mettre le terrain
    this.http.get('http://localhost:8086/terrains/' + this.stockageterrain.terrain.id).subscribe(response => {
      this.datapotager = response;
      console.log(this.datapotager);
    })
    this.http.get('http://localhost:8086/acceptedofterrain/' + this.stockageterrain.terrain.id).subscribe(response => {
      this.datamembres = response;
      console.log(response);
    })
    this.http.get('http://localhost:8086/requestofterrain/' + this.stockageterrain.terrain.id).subscribe(response => {
      this.datademandes = response;
      //console.log(response);
    })
    this.http.get('http://localhost:8086/messageGroupe/' + this.stockageterrain.terrain.id).subscribe(response => {
      this.messages = response;
      console.log("liste des messages")
      console.log(response)
    })
    this.http.get('http://localhost:8086/imageGroup/' + this.stockageterrain.terrain.id).subscribe(response => {
      this.images = response;
    })
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
    //console.log(this.datapotager.id);
    //console.log("user id to kick " + to_kick.id);
    console.log(this.datamembres);
    this.http.delete('http://localhost:8086/del.userofterrain/'+to_kick.id+'/'+this.datapotager.id).subscribe();
    //console.log(this.datamembres);
    this.ngOnInit();
  }

  testProprio(){
    if (this.servisession.userConnecte.id == this.stockageterrain.terrain.proprietaire.id){
      this.visible=true
      
    }

    /*
    console.log(this.servisession.userConnecte.id)
    console.log("proprio testé")
    console.log(this.visible)
    */
  }

  posterMessage(){
    this.http.post('http://localhost:8086/messageGroupe/' + this.userConnecte.id +  '/'+ this.stockageterrain.terrain.id, this.newMessage).subscribe(response => {
    })
    
  }
}
