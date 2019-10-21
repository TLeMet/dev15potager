import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-espace-potagers',
  templateUrl: './espace-potagers.component.html',
  styleUrls: ['./espace-potagers.component.css']
})
export class EspacePotagersComponent implements OnInit {
  data;
  
  constructor(private http: HttpClient, private dialog: MatDialog) { }

  ngOnInit() {
    this.http.get('http://localhost:8086/terrains').subscribe(response => {

      this.data = response;

      console.log(response);
    })
  }

}
