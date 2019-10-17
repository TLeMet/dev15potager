import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attributacos',
  templateUrl: './attributacos.component.html',
  styleUrls: ['./attributacos.component.css']
})
export class AttributacosComponent implements OnInit {

  constructor() { }

  name = "Bob l'éponge";
  myName;

  affName(caca){
    this.myName = caca;
  }

  ngOnInit() {
  }
 
}

