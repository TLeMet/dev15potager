import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { HttpClient } from '@angular/common/http';
import { ServiceinfouserService } from '../serviceinfouser.service';
import { Router } from '@angular/router';
import { SessionuserService } from '../sessionuser.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'espaceperso/modifprofil',
  templateUrl: './modifprofil.component.html',
  styleUrls: ['./modifprofil.component.css']
})


export class ModifprofilComponent implements OnInit {

  userConnecte;
  regexTel = new RegExp('(0|\+33|0033)[1-9][0-9]{8}');
  regexPw = new RegExp('^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$');

  constructor(private http : HttpClient, private route: Router, private servi : ServiceinfouserService, private servisession: SessionuserService) { }

  
  saveModifProfil() {

    var new_pw = (<HTMLInputElement>document.getElementById("new_pw")).value;
    var new_pw2 = (<HTMLInputElement>document.getElementById("new_pw2")).value;
    var new_tel = (<HTMLInputElement>document.getElementById("new_tel")).value;
    var new_age = +(<HTMLInputElement>document.getElementById("new_age")).value;

    if (new_pw === new_pw2 && this.regexPw.test(new_pw)){
      this.userConnecte.pw = new_pw;
    }
    if (this.regexTel.test(new_tel)){
      this.userConnecte.tel = new_tel;
    }
    if (new_age>0 && new_age<150){
      this.userConnecte.age = new_age;
    }

    const ins = this.http.put('http://localhost:8086/users/' + this.userConnecte.id, this.userConnecte).toPromise();

    ins.then(
    (response => {
      //console.log("On est entrés dans la fonction");
      //this.personneModif = response;
      //this.route.navigate(['/espaceperso']);
    })
    )
    this.servisession.userConnecte = this.userConnecte;
    this.ngOnInit();
  }




  ngOnInit() {
    this.userConnecte = this.servisession.userConnecte;

  }

}
