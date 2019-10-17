import { Component, OnInit } from '@angular/core';
import { ServiceBouffeService } from '../service-bouffe.service';

@Component({
  selector: 'app-bindingkebab',
  templateUrl: './bindingkebab.component.html',
  styleUrls: ['./bindingkebab.component.css']
})
export class BindingkebabComponent implements OnInit {


  constructor(private servi: ServiceBouffeService){}

  name = "Bob l'éponge";
  d;


  changeName(){
    this.name = 'Joe Biden';
  }




  // On est obligés d'implémenter cette méthode :
  ngOnInit() {
    this.d = this.servi.maDate();
  }

}
