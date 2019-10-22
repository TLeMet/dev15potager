import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'espaceperso',
  templateUrl: './perso.component.html',
  styleUrls: ['./perso.component.css'],
  
})


export class PersoComponent implements OnInit {
  data;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:8086/terrains').subscribe(response => {
      this.data = response;
      console.log(response);
    })
    
  }

  ouvreJardin(t){
      //Aller à la page du jardin dédiée
  }


}
