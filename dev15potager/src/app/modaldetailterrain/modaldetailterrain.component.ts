import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { ServiceRechercheterrainService } from '../service-rechercheterrain.service';
import { MatDialog } from '@angular/material';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { take } from 'rxjs/operators';
import { Message } from '../model/Message';
import { Terrain } from '../model/Terrain';
import { User } from '../model/User';


@Component({
  selector: 'app-modaldetailterrain',
  templateUrl: './modaldetailterrain.component.html',
  styleUrls: ['./modaldetailterrain.component.css']
})
export class ModaldetailterrainComponent implements OnInit {

  // tslint:disable-next-line: max-line-length
  constructor(private servi: ServiceRechercheterrainService, private http: HttpClient, private dialogRef: MatDialogRef<ModaldetailterrainComponent>, private dialog: MatDialog, private _ngZone: NgZone) { }

  detail = this.servi.myDataT;
  idConnect = JSON.parse(localStorage.getItem('userConnecte'));
  message: Message = new Message();
  terrain: Terrain = new Terrain();
  idConnect2: User = new User();

  @ViewChild('autosize', { static: false }) autosize: CdkTextareaAutosize;

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1))
      .subscribe(() => this.autosize.resizeToFitContent(true));
  }

  closeDialog() {
    this.dialogRef.close();
  }

  envoieMessage(text) {
    this.message.idUser = this.idConnect2;
    this.message.idTerrain = this.terrain;
    this.message.message = text;
    console.log(this.message.idUser);
    console.log(this.message.idTerrain);
    console.log(this.message);

    const mypost: JSON = <JSON><unknown>{
      "user": { },
      "terrain": { },
      "message": this.message.message
    }


    this.http.post('http://localhost:8086/insertDemande/' + this.idConnect.id + '/' + this.detail.id, mypost).subscribe(
      data => {

      }, err => {
        console.log(err);
      }
    );
    this.closeDialog();
    location.reload();
  }

  ngOnInit() {
  }

}
