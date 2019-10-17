import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userbanane',
  templateUrl: './userbanane.component.html',
  styleUrls: ['./userbanane.component.css']
})
export class UserbananeComponent implements OnInit {

  lapersonne: User = new User();
  constructor(private http : HttpClient, private route: Router) { }

  ngOnInit() {
    this.lapersonne.nom = "blabla";
  }

  addPersonne(){
    this.http.post('http://localhost:8087/personnes', this.lapersonne).subscribe(data  => {

      }, err => {
        console.log(err);
      }
    );

      this.route.navigate(['/sushi']);
  }

}
