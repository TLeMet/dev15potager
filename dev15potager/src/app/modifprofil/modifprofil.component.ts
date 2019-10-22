import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { HttpClient } from '@angular/common/http';
import { ServiceinfouserService } from '../serviceinfouser.service';
import { Router } from '@angular/router';
import { SessionuserService } from '../sessionuser.service';

@Component({
  selector: 'espaceperso/modifprofil',
  templateUrl: './modifprofil.component.html',
  styleUrls: ['./modifprofil.component.css']
})
export class ModifprofilComponent implements OnInit {

  userConnecte;
  regexTel = new RegExp('0(6|7)\d\d\d\d\d\d\d');

  constructor(private http : HttpClient, private route: Router, private servi : ServiceinfouserService, private servisession: SessionuserService) { }

  /*
  checkValidTel() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (this.regexTel.test(this.userConnecte.tel)) {
            resolve({ emailIsTaken: true })
        } else {resolve(null)}
      }, 2000)
    },)
  }
  */
  
  saveModifProfil() {

    const ins = this.http.put('http://localhost:8086/users/' + this.userConnecte.id, this.userConnecte).toPromise();

    ins.then(
    (response => {
      console.log("On est entrés dans la fonction");
      //this.personneModif = response;
      this.route.navigate(['/espaceperso']);
    })
    )


  }




  ngOnInit() {
    this.userConnecte = this.servisession.userConnecte;

  }

}
