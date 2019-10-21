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

    
    
    // Attention, le code continue alors que le précédent subscribe n'est pas fini.


    var mdpinput = <HTMLInputElement>document.getElementById("lemdpinput");

    if(this.userConnecte!=null){  // On vérifie que userConnecte n'est pas null.
      //if(this.userConnecte.pw == this.personneCo.pw){    // On vérifie qu'il y a concordance de mdp.
      if(this.userConnecte.pw == mdpinput.value.toString()){

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
    // Depuis 'usertous', on crée une liste des mails dans 'mailtous'.
    for(var varmail in this.usertous){ 
      this.mailtous[varmail] = this.usertous[varmail];
    }

    if(!this.mailtous.includes(this.lapersonne.mail)){
      this.http.post('http://localhost:8086/users', this.lapersonne).subscribe(data  => {
    
      }, err => {
        console.log(err);
      });
  
      this.route.navigate(['/perso.component.html']);
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
