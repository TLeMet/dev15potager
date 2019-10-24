import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { ServiceRechercheterrainService } from '../service-rechercheterrain.service';
import { ModaldetailterrainComponent } from '../modaldetailterrain/modaldetailterrain.component';
import { MatDialog } from '@angular/material';


@Component({
  selector: 'app-modalrecherche',
  templateUrl: './modalrecherche.component.html',
  styleUrls: ['./modalrecherche.component.css'] 
})
export class ModalrechercheComponent implements OnInit {

// tslint:disable-next-line: max-line-length
constructor(private servi: ServiceRechercheterrainService, private http: HttpClient, private dialogRef: MatDialogRef<ModalrechercheComponent>, private dialog: MatDialog) {}

name = this.servi.rechTerr;
data;

  ngOnInit() {
    this.http.get('http://localhost:8086/terrains/nomville/' + this.name).subscribe(response => {
      this.data = response;
      console.log(this.data);
    }
  );
}

closeDialog() {
  this.dialogRef.close();
  }

ouvreDetail(u) {
  this.servi.myDataT = u;
  const mydial2 = this.dialog.open(ModaldetailterrainComponent, {
    height: '700px',
    width: '500px',
  });

}

}
