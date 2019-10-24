import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { SessionuserService } from '../sessionuser.service';
import { MatDialog } from '@angular/material';
import { ModalwronginscriptionComponent } from '../modalwronginscription/modalwronginscription.component';

export interface IHash {
  [details: string] : string;
} 
let error_messages: IHash = {};
error_messages["pw_same"] = "Les 2 Mots de passe ne correspondent pas";
error_messages["pw_hard"] = "Le Mot de passe doit contenir au moins un chiffre, une majuscule, un caractère spécial et plus de 8 caractères.";
error_messages["tel"] = "Veuillez entrer un numéro de téléphone français valide";
error_messages["age"] = "Âge invalide";
error_messages["mail_exist"] = "Un utilisateur est déjà inscrit avec cette adresse e-mail";
error_messages["mail_format"] = "Adresse e-mail invalide"

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
  errors_to_pass;

  regexTel = new RegExp('(0|\\+33|0033)[1-9][0-9]{8}');
  regexPw = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\.!@#\$%\^&\*])(?=.{8,})");
  regexMail = new RegExp('^[^\W][a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*\@[a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*\.[a-zA-Z]{2,4}$');

// tslint:disable-next-line: max-line-length
constructor(private servisession: SessionuserService, private http: HttpClient, private route: Router, private dialogRef: MatDialogRef<DialogconnexionComponent>, private dialog: MatDialog) { }

  fermerDialog(){
    this.dialogRef.close();
  }

  erreurLogin(){
    return this.erreurlogin;
  }

  mailExiste(){
    return this.lemailexiste;
  }

  goConnexion(){
    //console.log("LOG1");
    this.login_attempt = {
      "mail": '' + this.personneCo.mail,
      "pw": '' + this.personneCo.pw
    };

      const co = this.http.post('http://localhost:8086/login', this.login_attempt ).toPromise();
      //console.log("toPromise réalisé.");
      //console.log(co);


      co.then(
      response => {
        //console.log("On est entrés dans la fonction");
        this.userConnexion = response;
        //console.log("LOG2 :" + response);
        
        
        if(this.userConnexion!=null){  // On vérifie que userConnexion n'est pas null.
        this.erreurlogin = false;
            //console.log("On va naviguer vers une autre page.");
            this.servisession.userConnecte = this.userConnexion; // SUPPRIMER

            // On stocke le user actuel dans le localStorage userConnecte.
            localStorage.setItem('userConnecte', JSON.stringify(this.userConnexion));
            
            // On peut ensuite l'appeler de cette façon :
            //console.log("localstorage stocké prenom: " + JSON.parse(localStorage.getItem("userConnecte")).prenom);
            // Quand on se déconnecte, ceci renvoie null : "JSON.parse(localStorage.getItem("userConnecte"))".


            this.fermerDialog()
            this.route.navigate(['/espaceperso']);

            
        }
        else{
          //console.log("userConnexion est null.");
          this.erreurlogin = true;
          // ici vérifier si l'adresse email entrée existe pour un message d'information.
        }
      })


  }




  goInscription(pw2){
    // Depuis 'usertous', on crée une liste des mails dans 'mailtous'.
   //console.log("Dans goInscription");
    let type_error = [];

    const ins = this.http.get('http://localhost:8086/users/mail/' + this.lapersonne.mail).toPromise();

    ins.then(
    (response => {
      //console.log("On est entrés dans la fonction");
      this.userInscrit = response;
      
      if(this.userInscrit == null){
        this.lemailexiste = false;
        //console.log("Le userInscrit n'existe pas, on va le créer.");
        
        var do_register: boolean = true;
        

        if (!this.regexMail.test(this.lapersonne.mail)){
          do_register = false;
          type_error.push(error_messages["mail_format"]);
        }
        //console.log(this.lapersonne.pw,pw2);
        //console.log("regex: ",this.regexPw.test(this.lapersonne.pw));
        //console.log("same: ",this.lapersonne.pw == pw2);
        if (!this.regexPw.test(this.lapersonne.pw)){
          do_register = false;
          type_error.push(error_messages["pw_hard"]);
        }
        if (this.lapersonne.pw != pw2 ){
          do_register = false;
          type_error.push(error_messages["pw_same"]);
        }
        if (!this.regexTel.test(this.lapersonne.tel)){
          do_register = false;
          type_error.push(error_messages["tel"]);
        }
        if (!(this.lapersonne.age>0 && this.lapersonne.age<150)){
          do_register = false;
          type_error.push(error_messages["age"]);
        }
        
        if (do_register){
          //console.log("tentative d'inscription")
          const ins2 = this.http.post('http://localhost:8086/users', this.lapersonne).toPromise();
          
          ins2.then(
            response2 => {
              //console.log("On va naviguer vers une autre page.");
              this.userInscrit = response2;
                           
              localStorage.setItem('userConnecte', JSON.stringify(this.userInscrit));
              this.fermerDialog();
              this.route.navigate(['/espaceperso']);
            }, err => {
            //console.log("Erreur : " + err);
          });
        } else {
          
          const open_error = this.dialog.open(ModalwronginscriptionComponent, {
            height: 'auto',
            width: 'auto',
            data: type_error,
          });
        }
      }
      else{
      //console.log("L'adresse email existe déjà.");
      this.lemailexiste = true;
      type_error.push(error_messages["mail_exist"]);
      const open_error = this.dialog.open(ModalwronginscriptionComponent, {
        height: 'auto',
        width: 'auto',
        data: type_error,
      });
      } 
    })
    )

  }


  ngOnInit() {
    //'usertous' est la liste de tous les users existants.
    this.http.get('http://localhost:8086/users').subscribe(response => {
      this.usertous = response;
      //console.log(response);
    })
  }



}
