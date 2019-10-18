import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceRechercheterrainService } from '../service-rechercheterrain.service'

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {

  constructor(private http : HttpClient, private servi : ServiceRechercheterrainService) { }

  terrainTrouve;

  ngOnInit() {
    this.http.get('http://localhost:8086/terrains/nom/'+ this.servi.rechTerr).subscribe(response => {
      this.terrainTrouve = response;
      console.log(response);

  })

}
}
