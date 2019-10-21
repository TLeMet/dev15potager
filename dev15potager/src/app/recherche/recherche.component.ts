import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceRechercheterrainService } from '../service-rechercheterrain.service';
import { Terrain } from '../model/terrain';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {

  constructor(private http: HttpClient, private servi: ServiceRechercheterrainService) { }

  terrainTrouve = this.servi.rechTerr;
  data;
  dataTN = this.servi.myDataT;
  dataTNT = this.servi.myDataT;
  ngOnInit() {
    console.log('je suis recharger rech');
    this.http.get('http://localhost:8086/terrains/nom/' + this.terrainTrouve).subscribe(response => {
      this.data = response;
      console.log('service' + this.servi.rechTerr);
      console.log('variable lcoale' + this.terrainTrouve);
      console.log('rech reponse' + response);
      console.log('data' + this.data + 'data');
      console.log('my data ' + this.servi.myDataT + ' data ');
      this.dataTNT = this.servi.myDataT;
    });


  }


}
