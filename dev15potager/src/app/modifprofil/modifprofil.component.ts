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

  constructor(private http : HttpClient, private route: Router, private servi : ServiceinfouserService, private servisession: SessionuserService) { }



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
