import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { ServiceRechercheterrainService } from '../service-rechercheterrain.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-modaldetailterrain',
  templateUrl: './modaldetailterrain.component.html',
  styleUrls: ['./modaldetailterrain.component.css']
})
export class ModaldetailterrainComponent implements OnInit {

  // tslint:disable-next-line: max-line-length
  constructor(private servi: ServiceRechercheterrainService, private http: HttpClient, private dialogRef: MatDialogRef<ModaldetailterrainComponent>, private dialog: MatDialog) { }

  detail = this.servi.myDataT;

  ngOnInit() {
  }

}
