import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/User';

@Component({
  selector: 'app-usersushi',
  templateUrl: './usersushi.component.html',
  styleUrls: ['./usersushi.component.css']
})
export class UsersushiComponent implements OnInit {

  lapersonne: User = new User();
  visible = false;
  data;

  // On déclare l'attribut et son type (http)
  constructor(private http: HttpClient) { }
  voirCacher(){
    // Passer à true s'il est false ou à false s'il est true. Version simplifiée d'un if blabl else blabla.
    this.visible = this.visible ? false : true;
  }

  modifPersonne(u){
    this.visible = true;
    this.lapersonne = u;
  }

  addPersonne(){
    // On fait un post. Quand on fait un subscribe, on met à jour la BD mais le code n'attend pas la fin du subscribe pour exécuter la suite.
    this.http.put('http://localhost:8087/personnes/' + this.lapersonne.id, this.lapersonne).subscribe(
      data => {
      }, err => {
        console.log(err);
      }
    );
  
  }

  deletePersonne(u){
    this.lapersonne = u;
    // On fait un delete. Grâce au toPromise() et au then, on attend la fin du delete avant de faire la suite. Ainsi on recharge la page après modifs dans la BD.
    const dele = this.http.delete('http://localhost:8087/personnes/' + this.lapersonne.id).toPromise();

    dele.then(
    ar => {
      console.log('test', ar)
      this.ngOnInit();
    }
    )
  }


  ngOnInit() {
    // On fait ça ici car si on le faisait dans le constructeur, on devrait attendre l'affichage de la page etc, ce serait trop long.
    // get : va chercher des API.
    this.http.get('http://localhost:8087/personnes').subscribe(response => {
      // Response n'est pas accessible en dehors de la fonction, alors on le met dans notre var data.
      this.data = response;
      // On affiche dans la console.
      console.log(response);
    })
    // 'response' va contenir tout ce qu'il y a dans le lien.
  }

}
