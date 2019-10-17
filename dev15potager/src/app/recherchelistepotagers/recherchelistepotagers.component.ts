import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-recherchelistepotagers',
  templateUrl: './recherchelistepotagers.component.html',
  styleUrls: ['./recherchelistepotagers.component.css']
})
export class RecherchelistepotagersComponent implements OnInit {

  data;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // On fait ça ici car si on le faisait dans le constructeur, on devrait attendre l'affichage de la page etc, ce serait trop long.
    // get : va chercher des API.
    this.http.get('http://localhost:8185/terrain').subscribe(response => {
      // Response n'est pas accessible en dehors de la fonction, alors on le met dans notre var data.
      this.data = response;
      // On affiche dans la console.
      console.log(response);
    })
    // 'response' va contenir tout ce qu'il y a dans le lien.
  }

}
