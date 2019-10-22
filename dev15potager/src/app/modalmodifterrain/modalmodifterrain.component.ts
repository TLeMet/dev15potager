import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material';
import { SessionuserService } from '../sessionuser.service';

@Component({
  selector: 'app-modalmodifterrain',
  templateUrl: './modalmodifterrain.component.html',
  styleUrls: ['./modalmodifterrain.component.css']
})
export class ModalmodifterrainComponent implements OnInit {

  constructor(private http: HttpClient, private dialogRef: MatDialogRef<ModalmodifterrainComponent>, private dialog: MatDialog ,private servisession: SessionuserService) { }

  datapotager;
  userConnecte;

  ngOnInit() {

  this.userConnecte = this.servisession.userConnecte;
  
  this.http.get('http://localhost:8086/terrains/' + 1).subscribe(response => {
    this.datapotager = response;
    console.log(response);
    });
  }
  
}
