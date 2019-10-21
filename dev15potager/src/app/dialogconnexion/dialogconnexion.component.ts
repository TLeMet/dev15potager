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
  usertous;
  mailtous;

  login_attempt;
 


  constructor(private http : HttpClient, private route: Router, private dialogRef: MatDialogRef<DialogconnexionComponent>) { }


  fermerDialog(): void {
    this.dialogRef.close();
  }


  goConnexion(){
    console.log("LOG1");
    this.login_attempt = {
      "mail": '' + this.personneCo.mail,
         "pw": '' + this.personneCo.pw
    };
    console.log(this.login_attempt);  // ça marche

    const co = this.http.post('http://localhost:8086/login', this.login_attempt ).toPromise();

    co.then(
    (response => {
      console.log("On est entrés dans la fonction");
      this.userConnecte = response;
      console.log("LOG2 :" + response);
      
      
      if(this.userConnecte!=null){  // On vérifie que userConnecte n'est pas null.
        //if(this.userConnecte.pw == this.personneCo.pw){    // On vérifie qu'il y a concordance de mdp.
          console.log("On va naviguer vers /perso.component.html");
          this.route.navigate(['/perso.component.html']);
      }
      else{
        console.log("Ouh là là userConnecte est null");
      }
    })
    )


  }



  goInscription(){
    // Depuis 'usertous', on crée une liste des mails dans 'mailtous'.
    for(var varmail in this.usertous){ 
      this.mailtous[varmail] = this.usertous[varmail];
    }

    if(!this.mailtous.includes(this.lapersonne.mail)){
      this.http.post('http://localhost:8086/users', this.lapersonne).subscribe(data  => {
    
      }, err => {
        console.log(err);
      });
  
      this.route.navigate(['/rechTerrain']);
    }

  }


  ngOnInit() {
    //'usertous' est la liste de tous les users existants.
    this.http.get('http://localhost:8086/users').subscribe(response => {
      this.usertous = response;
      console.log(response);
    })
  }



}
