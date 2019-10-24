import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { SessionuserService } from '../sessionuser.service';

export interface IHash {
  [details: string] : string;
} 
let error_messages: IHash = {};
error_messages["pw"] = "Les 2 Mots de passe ne correspondent pas";
error_messages["tel"] = "Veuillez entrer un numéro de téléphone français valide";
error_messages["age"] = "Âge invalide";
error_messages["mail"] = "Un utilisateur est déjà inscrit avec cette adresse e-mail";

@Component({
  selector: 'dialogconnexion',
  templateUrl: './dialogconnexion.component.html',
  styleUrls: ['./dialogconnexion.component.css']
})
export class DialogconnexionComponent implements OnInit {


  lemailexiste: boolean = false;
  erreurlogin: boolean = false;
  lapersonne: User = new User();
  personneCo: User = new User();
  userConnexion;
  userInscrit;
  usertous;
  mailtous;
  testa;

  login_attempt;

  regexTel = new RegExp('(0|\\+33|0033)[1-9][0-9]{8}');
  regexPw = new RegExp('^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$');

// tslint:disable-next-line: max-line-length
constructor(private servisession: SessionuserService, private http: HttpClient, private route: Router, private dialogRef: MatDialogRef<DialogconnexionComponent>) { }

  goConnexion(){
    console.log("LOG1");
    this.login_attempt = {
      "mail": '' + this.personneCo.mail,
         "pw": '' + this.personneCo.pw
    };

      const co = this.http.post('http://localhost:8086/login', this.login_attempt ).toPromise();
      console.log("toPromise réalisé.");
      console.log(co);


      co.then(
      response => {
        console.log("On est entrés dans la fonction");
        this.userConnexion = response;
        console.log("LOG2 :" + response);
        
        
        if(this.userConnexion!=null){  // On vérifie que userConnexion n'est pas null.
        this.erreurlogin = false;
            console.log("On va naviguer vers une autre page.");
            this.servisession.userConnecte = this.userConnexion; // SUPPRIMER

            // On stocke le user actuel dans le localStorage userConnecte.
            localStorage.setItem('userConnecte', JSON.stringify(this.userConnexion));
            
            // On peut ensuite l'appeler de cette façon :
            console.log("localstorage stocké prenom: " + JSON.parse(localStorage.getItem("userConnecte")).prenom);
            // Quand on se déconnecte, ceci renvoie null : "JSON.parse(localStorage.getItem("userConnecte"))".


            this.dialogRef.close();
            this.route.navigate(['/espaceperso']);

            
        }
        else{
          console.log("userConnexion est null.");
          this.erreurlogin = true;
          // ici vérifier si l'adresse email entrée existe pour un message d'information.
        }
      })


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
        this.lemailexiste = false;
        console.log("Le userInscrit n'existe pas, on va le créer.");
        
        var new_pw = (<HTMLInputElement>document.getElementById("new_pw")).value;
        var new_pw2 = (<HTMLInputElement>document.getElementById("new_pw2")).value;
        var new_tel = (<HTMLInputElement>document.getElementById("new_tel")).value;
        var new_age = +(<HTMLInputElement>document.getElementById("new_age")).value;

        var do_register: boolean = true; 
        var wrong_pw: boolean = false;
        var wrong_tel: boolean = false;
        var wrong_age: boolean = false;
        var type_error: string;

        if (new_pw === new_pw2 && this.regexPw.test(new_pw)){
          this.lapersonne.pw = new_pw;
          do_register = true;
          wrong_pw = true;
        } else {
          do_register = false;
          type_error = "pw";
        }
        if (this.regexTel.test(new_tel)){
          this.lapersonne.tel = new_tel;
          do_register = true;
          wrong_tel = true;
        } else {
          do_register = false;
          type_error = "tel";
        }
        if (new_age>0 && new_age<150){
          this.lapersonne.age = new_age;
          do_register = true;
          wrong_age = true;
        } else {
          do_register = false;
          type_error = "age";
        }
        
        if (do_register){
          const ins2 = this.http.post('http://localhost:8086/users', this.lapersonne).toPromise();
          
          ins2.then(
            response2 => {
              console.log("On va naviguer vers une autre page.");
              this.userInscrit = response2;
                           
              localStorage.setItem('userConnecte', JSON.stringify(this.userInscrit));
              this.route.navigate(['/espaceperso']);
              this.dialogRef.close();
            }, err => {
            console.log("Erreur : " + err);
          });
        } else {

        }
      }
      else{
      console.log("L'adresse email existe déjà.");
      this.lemailexiste = true;
      type_error = "mail";
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
