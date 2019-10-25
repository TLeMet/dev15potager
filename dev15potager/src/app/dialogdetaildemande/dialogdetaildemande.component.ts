import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServicedemandeService } from '../servicedemande.service';
import { MatDialogRef } from '@angular/material';
import { User } from '../model/User';

@Component({
  selector: 'app-dialogdetaildemande',
  templateUrl: './dialogdetaildemande.component.html',
  styleUrls: ['./dialogdetaildemande.component.css']
})
export class DialogdetaildemandeComponent implements OnInit {
  id;
  nomuser;
  prenomuser;
  teluser;
  mailuser;
  messageuser;
  dateuser;
  user: User = new User;
  terrainSelect = JSON.parse(localStorage.getItem("terrain"));

  constructor(private http: HttpClient, private servi: ServicedemandeService,private dialogRef: MatDialogRef<DialogdetaildemandeComponent>) { }

  ngOnInit() {
    this.id = this.servi.id;
    this.nomuser = this.servi.nom;
    this.prenomuser = this.servi.prenom;
    this.teluser = this.servi.tel;
    this.mailuser = this.servi.mail;
    this.messageuser = this.servi.message;
    this.dateuser = this.servi.dateDemande;
    this.user = this.servi.user;

  }

  closeDialog() {
    this.dialogRef.close('Pizza!');
  }

  acceptDemand(){
    const dele2 = this.http.post('http://localhost:8086/accept.userofterrain/' + this.id + '/' + this.terrainSelect.id, this.user).toPromise();
    
    dele2.then(
      data=>{
        this.dialogRef.close();
        location.reload();
      }, err =>{
        console.log(err)
      }
    );
    this.dialogRef.close('Pizza!');
  }

  refuseDemand(){
    console.log(this.id);
    const dele = this.http.delete('http://localhost:8086/del.userofterrain/' + this.id + "/" + this.terrainSelect.id).toPromise();
    dele.then(
    ar =>{
      this.dialogRef.close();
      location.reload();
    }
  )
  this.dialogRef.close('Pizza!');
  }
}
