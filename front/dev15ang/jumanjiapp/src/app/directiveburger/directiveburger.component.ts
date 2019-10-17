import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiveburger',
  templateUrl: './directiveburger.component.html',
  styleUrls: ['./directiveburger.component.css']
})
export class DirectiveburgerComponent implements OnInit {

  superHeros = ['Clark', 'Captain America', 'Tanos', 'Black Panther', 'Iron man'];
  visible = true;


  voirCacher(){
    // Passer à true s'il est false ou à false s'il est true. Version simplifiée d'un if blabl else blabla.
    this.visible = this.visible ? false : true;
  }

  constructor() { }

  ngOnInit() {
  }

}
