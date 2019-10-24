import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material';
import { SessionuserService } from '../sessionuser.service';
import { StockageterrainService } from '../stockageterrain.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modalmodifterrain',
  templateUrl: './modalmodifterrain.component.html',
  styleUrls: ['./modalmodifterrain.component.css']
})
export class ModalmodifterrainComponent implements OnInit {

  constructor(private http: HttpClient, private dialogRef: MatDialogRef<ModalmodifterrainComponent>, private dialog: MatDialog ,private servisession: SessionuserService,  private stockageterrain: StockageterrainService, private route: Router) { }

  userConnecte = JSON.parse(localStorage.getItem("userConnecte"));

  userTerrainActif = JSON.parse(localStorage.getItem("terrainmodif"));
  

  ngOnInit() {
 
  }
  /*
  validModif(){
    const val = this.http.put('http://localhost:8086//terrains/' + this.userTerrainActif.terrain.id, this.userTerrainActif.terrain).toPromise()
    val.then(d => {this.ngOnInit()})
    this.dialogRef.close();
    this.route.navigate(['/espacepotager']);
    console.log("route validé");
  }*/

  validModif(){
    this.http.put('http://localhost:8086//terrains/' + this.userTerrainActif.id, this.userTerrainActif).subscribe(response => {})
    this.dialogRef.close();
  }
}
