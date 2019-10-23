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

@Component({
  selector: 'espaceperso/modifprofil',
  templateUrl: './modifprofil.component.html',
  styleUrls: ['./modifprofil.component.css']
})


export class ModifprofilComponent implements OnInit {

  userConnecte;
  regexTel = new RegExp('(0|\\+33|0033)[1-9][0-9]{8}');
  regexPw = new RegExp('^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$');

  constructor(private http : HttpClient, private route: Router, private servi : ServiceinfouserService, private servisession: SessionuserService, private dialogRef: MatDialogRef<ModalmodifprofilComponent>, private dialog: MatDialog) { }

  
  saveModifProfil() { 

    var new_pw = (<HTMLInputElement>document.getElementById("new_pw")).value;
    var new_pw2 = (<HTMLInputElement>document.getElementById("new_pw2")).value;
    var new_tel = (<HTMLInputElement>document.getElementById("new_tel")).value;
    var new_age = +(<HTMLInputElement>document.getElementById("new_age")).value;

    var do_modif: boolean = false;
    var wrong_pw: boolean = false;
    var wrong_tel: boolean = false;
    var wrong_age: boolean = false;

    if (new_pw === new_pw2 && this.regexPw.test(new_pw)){
      this.userConnecte.pw = new_pw;
      do_modif = true;
      wrong_pw = true;
    }
    if (this.regexTel.test(new_tel)){
      this.userConnecte.tel = new_tel;
      do_modif = true;
      wrong_tel = true;
    }
    if (new_age>0 && new_age<150){
      this.userConnecte.age = new_age;
      do_modif = true;
      wrong_age = true;
    }

    if (do_modif) {
      const ins = this.http.put('http://localhost:8086/users/' + this.userConnecte.id, this.userConnecte).toPromise();

      ins.then(
      (response => {
        //console.log("On est entrés dans la fonction");
        //this.personneModif = response;
        this.route.navigate(['/espaceperso']);
      }))
    } else {
      const open_error = this.dialog.open(ModalmodifprofilComponent, {
        height: '100px',
        width: '200px',
      });
    }
    this.servisession.userConnecte = this.userConnecte;
    this.ngOnInit();
  }




  ngOnInit() {
    this.userConnecte = this.servisession.userConnecte;

  }

}
