import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material';
import { DialogdetailspotagerComponent } from '../dialogdetailspotager/dialogdetailspotager.component';
import { DialogconnexionComponent } from '../dialogconnexion/dialogconnexion.component';


@Component({
  selector: 'recherchelistepotagers',
  templateUrl: './recherchelistepotagers.component.html',
  styleUrls: ['./recherchelistepotagers.component.css']
})
export class RecherchelistepotagersComponent implements OnInit {

  data;
  nbUsers;

  constructor(private http: HttpClient, private dialog: MatDialog) { }



  ouvreDetailsPotager() {
    const mydial = this.dialog.open(DialogdetailspotagerComponent, {
      height: '800px',
      width: '800px',
    });
  }

  ouvreConnexion() {
    const mydial2 = this.dialog.open(DialogconnexionComponent, {
      height: '800px',
      width: '1400px',
    });
  }

  countUsers(users) {
    this.nbUsers = users.count();
    return "caca" + this.nbUsers;
  }


  ngOnInit() {
    // On fait ça ici car si on le faisait dans le constructeur, on devrait attendre l'affichage de la page etc, ce serait trop long.
    // get : va chercher des API.
    this.http.get('http://localhost:8086/terrains').subscribe(response => {
      // Response n'est pas accessible en dehors de la fonction, alors on le met dans notre var data.
      this.data = response;
      // On affiche dans la console.
      console.log(response);
    })
    // 'response' va contenir tout ce qu'il y a dans le lien.
  }

}
