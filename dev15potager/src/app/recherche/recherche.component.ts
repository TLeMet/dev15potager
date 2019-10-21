import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceRechercheterrainService } from '../service-rechercheterrain.service'
import { Terrain } from '../model/terrain';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {

  constructor(private http : HttpClient, private servi : ServiceRechercheterrainService) { }

  terrainTrouve = this.servi.rechTerr;
  data : Terrain = new Terrain()
  nomt = this.data.nom;
  ngOnInit() {
    this.http.get('http://localhost:8086/terrains/nom/'+ this.terrainTrouve).subscribe(data => {
      
      console.log(this.servi.rechTerr)
      console.log(this.terrainTrouve);
      console.log(data);
     

  })

  

}
}
