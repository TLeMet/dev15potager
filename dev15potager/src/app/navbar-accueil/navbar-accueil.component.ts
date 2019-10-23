import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogconnexionComponent } from '../dialogconnexion/dialogconnexion.component';

@Component({
  selector: 'app-navbar-accueil',
  templateUrl: './navbar-accueil.component.html',
  styleUrls: ['./navbar-accueil.component.css']
})
export class NavbarAccueilComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ouvreConnexion() {
    const mydial2 = this.dialog.open(DialogconnexionComponent, {
      height: '680px',
      width: '1400px',
    });
  }


  ouvreInscription() {
    const mydial3 = this.dialog.open(DialogconnexionComponent, {
      height: '680px',
      width: '1400px',
    });
  }



  ngOnInit() {
  }

}
