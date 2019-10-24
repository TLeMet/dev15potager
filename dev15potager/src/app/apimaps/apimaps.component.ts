import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { AgmMap, MapsAPILoader, GoogleMapsAPIWrapper } from '@agm/core';
import { StockageterrainService } from '../stockageterrain.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-apimaps',
  templateUrl: './apimaps.component.html',
  styleUrls: ['./apimaps.component.css']
})
export class ApimapsComponent {
  title = 'My first AGM project';
  lat;
  lng;
  dataadresse;
  terrainadresse;
  adressemodif;
  terraincp;

  constructor(private http: HttpClient, private stockageterrain: StockageterrainService) { }

  ngOnInit() {

    this.terraincp = this.stockageterrain.terrain.postal;
    this.terrainadresse = this.stockageterrain.terrain.adresse;
    this.adressemodif = this.terrainadresse.replace(' ', '+');

  this.http.get('https://api-adresse.data.gouv.fr/search/?q=' + this.adressemodif + "&postcode=" + this.terraincp).subscribe(response => {
    this.dataadresse = response;
    console.log(this.dataadresse);
  })
  this.lat = this.dataadresse.features.geometry.coordinates[0];
  this.lng = this.dataadresse.features.geometry.coordinates[1];
  }
}