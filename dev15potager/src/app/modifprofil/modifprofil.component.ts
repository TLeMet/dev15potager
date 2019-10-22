import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { HttpClient } from '@angular/common/http';
import { ServiceinfouserService } from '../serviceinfouser.service';
import { Router } from '@angular/router';

@Component({
  selector: 'espaceperso/modifprofil',
  templateUrl: './modifprofil.component.html',
  styleUrls: ['./modifprofil.component.css']
})
export class ModifprofilComponent implements OnInit {

  personneModif = new User;

  constructor(private http : HttpClient, private route: Router, private servi : ServiceinfouserService) { }



  saveModifProfil() {

    const ins = this.http.put('http://localhost:8086/users/' + this.personneModif.id, this.personneModif).toPromise();

    ins.then(
    (response => {
      console.log("On est entrés dans la fonction");
      //this.personneModif = response;
      this.route.navigate(['/espaceperso']);
    })
    )


  }




  ngOnInit() {
    // On va chercher le user stocké dans le service user.
    // this.personneModif = this.servi.user;
    this.personneModif.age = JSON.parse(localStorage.getItem('userConnecte')).age;
  }

}
