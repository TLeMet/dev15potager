import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { HttpClient } from '@angular/common/http';
import { ServiceinfouserService } from '../serviceinfouser.service';

@Component({
  selector: 'modifprofil',
  templateUrl: './modifprofil.component.html',
  styleUrls: ['./modifprofil.component.css']
})
export class ModifprofilComponent implements OnInit {

  personneModif;

  constructor(private http : HttpClient, private servi : ServiceinfouserService) { }



  saveModifProfil() {

    const ins = this.http.put('http://localhost:8086/users/' + this.personneModif.id, this.personneModif).toPromise();

    ins.then(
    (response => {
      console.log("On est entrés dans la fonction");
      //this.personneModif = response;
    })
    )


  }




  ngOnInit() {
    // On va chercher le user stocké dans le service user.
    this.personneModif = this.servi.user;
  }

}
