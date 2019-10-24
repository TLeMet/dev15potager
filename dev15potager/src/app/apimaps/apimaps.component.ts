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
  title = 'Map';
  lat;
  lng;
  dataadresse;
  terrain = JSON.parse(localStorage.getItem("terrain"));
  terraincp;
  terrainadresse;
  adressemodif;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.terraincp = this.terrain.postal;
    this.terrainadresse = this.terrain.adresse;
    this.adressemodif = this.terrainadresse.split(' ').join('+');

  const gouv = this.http.get("https://api-adresse.data.gouv.fr/search/?q=" + this.adressemodif + "&postcode=" + this.terraincp).toPromise();

  gouv.then(
    rep => {
      this.dataadresse = rep;
      console.log('test ',  rep);
      this.lat = this.dataadresse.features[0].geometry.coordinates[1];
      this.lng = this.dataadresse.features[0].geometry.coordinates[0];
      console.log('test lat ',  this.dataadresse.features[0].geometry.coordinates[0]);
    }
  )
  }
}