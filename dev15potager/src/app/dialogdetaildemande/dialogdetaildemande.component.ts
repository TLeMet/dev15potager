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
    //Mettre le terrain
    this.http.post('http://localhost:8086/accept.userofterrain/' + this.id + '/1', this.user)
    .subscribe(
      data=>{
      }, err =>{
        console.log(err)
      }
    );
    this.dialogRef.close('Pizza!');
  }

  refuseDemand(){
    //Mettre le terrain
    console.log(this.id);
    const dele = this.http.delete('http://localhost:8086/del.userofterrain/' + this.id + "/1").toPromise();
    dele.then(
    ar =>{
      this.ngOnInit();
    }
  )
  this.dialogRef.close('Pizza!');
  }
}
