import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-modalmodifterrain',
  templateUrl: './modalmodifterrain.component.html',
  styleUrls: ['./modalmodifterrain.component.css']
})
export class ModalmodifterrainComponent implements OnInit {

  constructor(private http: HttpClient, private dialogRef: MatDialogRef<ModalmodifterrainComponent>, private dialog: MatDialog) { }

  datapotager;

  ngOnInit() {
  this.http.get('http://localhost:8086/terrains/' + 1).subscribe(response => {
    this.datapotager = response;
    console.log(response);
    });
  }
  
}
