import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


// Il faut le "export" pour montrer que la classe est public.
export class AppComponent {
  title = 'jumanjiapp';
  name = "Bob l'éponge";
  projectname = "Jumanji";
  myName;
  ville = "Bikini Bottom";


  changeName(){
    this.name = 'Joe Biden';
  }

  affName(nom){
    this.myName = nom;
  }

}


