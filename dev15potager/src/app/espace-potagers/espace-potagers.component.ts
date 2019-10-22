import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material';
import { DialogdetaildemandeComponent } from '../dialogdetaildemande/dialogdetaildemande.component';
import { ServicedemandeService } from '../servicedemande.service';

@Component({
  selector: 'app-espace-potagers',
  templateUrl: './espace-potagers.component.html',
  styleUrls: ['./espace-potagers.component.css']
})
export class EspacePotagersComponent implements OnInit {
  datapotager;
  datamembres;
  datademandes;
  
  constructor(private http: HttpClient, private dialog: MatDialog, private servi: ServicedemandeService) { }
  ngOnInit() {
    // mettre le terrain
    this.http.get('http://localhost:8086/terrains/' + 1).subscribe(response => {
      this.datapotager = response;
      console.log(response);
    })
    this.http.get('http://localhost:8086/acceptedofterrain/' + 1).subscribe(response => {
      this.datamembres = response;
      console.log(response);
    })
    this.http.get('http://localhost:8086/requestofterrain/' + 1).subscribe(response => {
      this.datademandes = response;
      console.log(response);
    })
  }
  
  openDemande(d){
    this.servi.id = d.user.id;
    this.servi.nom = d.user.nom;
    this.servi.prenom = d.user.prenom;
    this.servi.mail = d.user.mail;
    this.servi.tel = d.user.tel;
    this.servi.message = d.message;
    this.servi.dateDemande = d.dateDemande;
    this.servi.user = d.user;
    const mydial2 = this.dialog.open(DialogdetaildemandeComponent, {
      height: '680px',
      width: '1400px',
    });
  }
}
