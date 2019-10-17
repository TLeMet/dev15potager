import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipesaucisse',
  templateUrl: './pipesaucisse.component.html',
  styleUrls: ['./pipesaucisse.component.css']
})
export class PipesaucisseComponent implements OnInit {

  msg = "Juste pour tester les pipes.";
  dateJour = new Date();
  constructor() { }

  ngOnInit() {
  }

}
