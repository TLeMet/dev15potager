import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { ServiceRechercheterrainService } from '../service-rechercheterrain.service';

@Component({
  selector: 'app-modalrecherche',
  templateUrl: './modalrecherche.component.html',
  styleUrls: ['./modalrecherche.component.css']
})
export class ModalrechercheComponent implements OnInit {

constructor(private servi: ServiceRechercheterrainService, private http: HttpClient, private dialogRef: MatDialogRef<ModalrechercheComponent>){}

name = this.servi.rechTerr;
data;

  ngOnInit() {
    this.http.get('http://localhost:8086/terrains/nomville/' + this.name).subscribe(response => {
      this.data = response;
      console.log(this.data);
    }
  );
}

}
