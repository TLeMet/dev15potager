import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../model/User';

@Component({
  selector: 'dialogconnexion',
  templateUrl: './dialogconnexion.component.html',
  styleUrls: ['./dialogconnexion.component.css']
})
export class DialogconnexionComponent implements OnInit {


  lapersonne: User = new User();
  personneCo: User = new User();
  userConnecte;


  constructor(private http : HttpClient, private route: Router, private dialogRef: MatDialogRef<DialogconnexionComponent>) { }


  fermerDialog(): void {
    this.dialogRef.close();
  }


  goConnexion(){
    console.log("LOG1");
    this.http.get('http://localhost:8086/users/mail/' + this.personneCo.mail).subscribe(response => {
      this.userConnecte = response;
      console.log("LOG2 :" + response);
    })

    if(this.userConnecte!=null){
      if(this.userConnecte.pw === this.personneCo.pw){
        this.route.navigate(['/perso.component.html']);

      }
      else{
      console.log("La comparaison de mots de passes n'est pas bonne.");

      }
    }
    else{
      console.log("Ouh là là userConnecte est null");
    }
  }


  
  goInscription(){
    this.http.post('http://localhost:8086/users', this.lapersonne).subscribe(data  => {

    }, err => {
      console.log(err);
    }
  );

    this.route.navigate(['/perso.component.html']);
  }


  ngOnInit() {
  }

}
