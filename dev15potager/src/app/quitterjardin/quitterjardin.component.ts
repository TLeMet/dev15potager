import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SessionuserService } from '../sessionuser.service';
import { Router } from '@angular/router';
import { StockageterrainService } from '../stockageterrain.service';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-quitterjardin',
  templateUrl: './quitterjardin.component.html',
  styleUrls: ['./quitterjardin.component.css']
})
export class QuitterjardinComponent implements OnInit {
  userConnecte;
  terrain;
  constructor(private dialog: MatDialog, private http: HttpClient, private servisession: SessionuserService, 
    private route: Router, private stockageterrain: StockageterrainService, private dialogRef: MatDialogRef<QuitterjardinComponent>) { }

  ngOnInit() {
    if(JSON.parse(localStorage.getItem("userConnecte")) == null){
      this.route.navigate(['/accueil']);
    }
    else{
      this.terrain = this.stockageterrain.terrain
    

  }
  }

  quitterPotager(t){
    this.userConnecte = JSON.parse(localStorage.getItem("userConnecte"));
    console.log("ID user : " + this.userConnecte.id);
    console.log("ID terrain : " + this.stockageterrain.terrain.id);
    const dele = this.http.delete('http://localhost:8086/del.userofterrain/' + this.userConnecte.id + "/" + this.terrain.id).toPromise();
    dele.then(
    ar =>{
      this.closeDialog();
      location.reload();
    })
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
