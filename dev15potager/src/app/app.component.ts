import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'dev15potager';

  constructor(private route: Router) {}


 ngOnInit() {
  //  console.log("ngOnInit de app-component");
  //    this.route.navigate(['/accueil']);
 }
}