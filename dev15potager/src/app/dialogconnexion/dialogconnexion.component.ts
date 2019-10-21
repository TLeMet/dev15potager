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

  lemailexiste = 0;
  erreurlogin = 0;
  lapersonne: User = new User();
  personneCo: User = new User();
  userConnecte;
  userInscrit;
  usertous;
  mailtous;

  login_attempt;
 


  constructor(private http: HttpClient, private route: Router, private dialogRef: MatDialogRef<DialogconnexionComponent>) { }


  fermerDialog(): void {
    this.dialogRef.close();
  }
  mailExiste(){
    if(this.lemailexiste == 1){
      return true;
    }
    else{
      return false;
    }
  }


  erreurLogin(){
    if(this.erreurlogin == 1){
      return true;
    }
    else{
      return false;
    }
  }



  goConnexion(){
    console.log("LOG1");
    this.login_attempt = {
      "mail": '' + this.personneCo.mail,
         "pw": '' + this.personneCo.pw
    };

    try {
      const co = this.http.post('http://localhost:8086/login', this.login_attempt ).toPromise();
      console.log("toPromise réalisé.");

      co.then(
      response => {
        console.log("On est entrés dans la fonction");
        this.userConnecte = response;
        console.log("LOG2 :" + response);
        
        
        if(this.userConnecte!=null){  // On vérifie que userConnecte n'est pas null.
        this.erreurlogin = 0;
            console.log("On va naviguer vers une autre page.");
            this.route.navigate(['/rechTerrain']);
        }
        else{
          console.log("userConnecte est null.");
          this.erreurlogin = 1;
          // ici vérifier si l'adresse email entrée existe pour un message d'information.
        }
      })
    }
    catch (e){
      console.log("userConnecte est null.");
      this.erreurlogin = 1;
    }
  }




  goInscription(){
    // Depuis 'usertous', on crée une liste des mails dans 'mailtous'.
    console.log("Dans goInscription");

    const ins = this.http.get('http://localhost:8086/users/mail/' + this.lapersonne.mail).toPromise();

    ins.then(
    (response => {
      console.log("On est entrés dans la fonction");
      this.userInscrit = response;

      if(this.userInscrit == null){
        this.lemailexiste = 0;
        console.log("Le user n'existe pas, on va le créer.");

        const ins2 = this.http.post('http://localhost:8086/users', this.lapersonne).toPromise();
        
        ins2.then(
          response2 => {
            console.log("On va naviguer vers une autre page.");
            this.route.navigate(['/rechTerrain']);
          }, err => {
          console.log("Erreur : " + err);
      });

      }
      else{
      console.log("L'adresse email existe déjà.");
      this.lemailexiste = 1;
      }
    })
    )

  }


  ngOnInit() {
    //'usertous' est la liste de tous les users existants.
    this.http.get('http://localhost:8086/users').subscribe(response => {
      this.usertous = response;
      console.log(response);
    })
  }



}
