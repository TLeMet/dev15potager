import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { ServiceRechercheterrainService } from '../service-rechercheterrain.service';
import { ServiceinfouserService } from '../serviceinfouser.service';
import { MatDialog } from '@angular/material';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {take} from 'rxjs/operators';
import { Message } from '../model/Message';

@Component({
  selector: 'app-modaldetailterrain',
  templateUrl: './modaldetailterrain.component.html',
  styleUrls: ['./modaldetailterrain.component.css']
})
export class ModaldetailterrainComponent implements OnInit {

  // tslint:disable-next-line: max-line-length
  constructor(private servi: ServiceRechercheterrainService, private http: HttpClient, private dialogRef: MatDialogRef<ModaldetailterrainComponent>, private dialog: MatDialog, private _ngZone: NgZone, private servi2: ServiceinfouserService) { }

  detail = this.servi.myDataT;
  idConnect = this.servi2.user;
  message: Message = new Message();

  @ViewChild('autosize', {static: false}) autosize: CdkTextareaAutosize;

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1))
        .subscribe(() => this.autosize.resizeToFitContent(true));
  }

  closeDialog() {
  this.dialogRef.close();
  }

  envoieMessage(text) {
    console.log(this.idConnect.id);
    console.log(this.detail.id);
    this.message.idUser = this.idConnect.id;
    this.message.idTerrain = this.detail.id;
    this.message.message = text;
    this.http.post('http://localhost:8086/insertDemande/' + this.idConnect.id + '/' + this.detail.id , this.message).subscribe(
      data => {

      }, err => {
        console.log(err);
      }
    );
  }

  ngOnInit() {
  }

}
