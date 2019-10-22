import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material';
import { DialogdetaildemandeComponent } from '../dialogdetaildemande/dialogdetaildemande.component';
import { ModalmodifterrainComponent } from '../modalmodifterrain/modalmodifterrain.component';

@Component({
  selector: 'app-espace-potagers',
  templateUrl: './espace-potagers.component.html',
  styleUrls: ['./espace-potagers.component.css']
})
export class EspacePotagersComponent implements OnInit {
  datapotager;
  datamembres;
  datademandes;
  
  constructor(private http: HttpClient, private dialog: MatDialog) { }

  ngOnInit() {
    // mettre le terrain
    this.http.get('http://localhost:8086/terrains/' + 1).subscribe(response => {
      this.datapotager = response;
      //console.log(response);
    })
    this.http.get('http://localhost:8086/userofterrain/' + 1).subscribe(response => {
      this.datamembres = response;
      //console.log(response);
    })
    this.http.get('http://localhost:8086/requestofterrain/' + 1).subscribe(response => {
      this.datademandes = response;
      //console.log(response);
    })

  }

  openConsulter(){
    const mydial2 = this.dialog.open(DialogdetaildemandeComponent, {
      height: '680px',
      width: '1400px',
    });
  }

  modifDetailTerrain(){
    const mydial2 = this.dialog.open(ModalmodifterrainComponent, {
      height: '700px',
      width: '500px',
    });
    
  exclureUser(to_kick){
    //console.log(this.datapotager.id);
    //console.log("user id to kick " + to_kick.id);
    console.log(this.datamembres);
    this.http.delete('http://localhost:8086/del.userofterrain/'+to_kick.id+'/'+this.datapotager.id).subscribe();
    //console.log(this.datamembres);
    this.ngOnInit();
  }
}
