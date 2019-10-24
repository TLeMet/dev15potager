import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { HttpClient } from '@angular/common/http';
import { ServiceinfouserService } from '../serviceinfouser.service';
import { Router } from '@angular/router';
import { SessionuserService } from '../sessionuser.service';
import { NgClass } from '@angular/common';
import { ModalmodifprofilComponent } from '../modalmodifprofil/modalmodifprofil.component';
import { MatDialogRef } from '@angular/material';
import { MatDialog } from '@angular/material';

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
  selector: 'espaceperso/modifprofil',
  templateUrl: './modifprofil.component.html',
  styleUrls: ['./modifprofil.component.css']
})


export class ModifprofilComponent implements OnInit {

  userConnecte = new User();
  userSaved = new User();
  userModif = new User();

  regexTel = new RegExp('(0|\\+33|0033)[1-9][0-9]{8}');
  regexPw = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\.!@#\$%\^&\*])(?=.{8,})");
  regexMail = new RegExp('^[^\W][a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*\@[a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*\.[a-zA-Z]{2,4}$');

  constructor(private http : HttpClient, private route: Router, private servi : ServiceinfouserService,
        private servisession: SessionuserService, private dialog: MatDialog) { }

  
  saveModifProfil(pw2) { 

    //console.log(this.userConnecte);

    const userSaved: User = this.userConnecte;
    var do_modif: boolean = true; 
    let type_error = [];

    this.userModif.id = this.userConnecte.id;
    this.userModif.nom = this.userConnecte.nom;
    this.userModif.prenom = this.userConnecte.prenom;
    this.userModif.mail = this.userConnecte.mail;
    // console.log(this.userConnecte.pw);
    // console.log(this.userModif.pw);
    // console.log(pw2, pw2=='');
    if((this.userModif.pw == undefined) || (pw2 == '')){
      this.userModif.pw = this.userConnecte.pw;
      pw2 = this.userConnecte.pw;
    }
    // console.log(this.userConnecte.pw);
    // console.log(this.userModif.pw);
    // console.log(pw2);
    if(this.userModif.tel == undefined){
      this.userModif.tel= this.userConnecte.tel;
    }
    if(this.userModif.age == undefined){
      this.userModif.age= this.userConnecte.age;
    }

    //console.log(this.userModif.pw,pw2);
    //console.log("regex: ",this.regexPw.test(this.userModif.pw));
    //console.log("same: ",this.userModif.pw == pw2);
    //console.log(this.userModif.pw,this.regexPw.test(this.userModif.pw))
    if (!(this.regexPw.test(this.userModif.pw))){
      do_modif = false;
      type_error.push(error_messages["pw_hard"]);
    }
    //console.log("do_modif",do_modif)
    if (this.userModif.pw != pw2 ){
      do_modif = false;
      type_error.push(error_messages["pw_same"]);
    }
    //console.log("do_modif",do_modif)
    if (!this.regexTel.test(this.userModif.tel)){
      do_modif = false;
      type_error.push(error_messages["tel"]);
    }
    //console.log("do_modif",do_modif)
    if (!(this.userModif.age>0 && this.userModif.age<150)){
      do_modif = false;
      type_error.push(error_messages["age"]);
    }

    //console.log("do_modif",do_modif)
    if (do_modif) {
      const ins = this.http.put('http://localhost:8086/users/' + this.userConnecte.id, this.userModif).toPromise();

      ins.then(
      (response => {                           
        localStorage.setItem('userConnecte', JSON.stringify(this.userModif));
        this.route.navigate(['/espaceperso']);
      }))
    } else {
        const open_error = this.dialog.open(ModalmodifprofilComponent, {
        height: 'auto',
        width: 'auto',
        data: type_error,
      });
    }
    
    this.ngOnInit();
  }

  ngOnInit() {
    this.userConnecte = JSON.parse(localStorage.getItem("userConnecte"));
    //console.log(this.userConnecte);
  }

}
