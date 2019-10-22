import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { ServiceRechercheterrainService } from '../service-rechercheterrain.service';
import { MatDialog } from '@angular/material';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {take} from 'rxjs/operators';



@Component({
  selector: 'app-modaldetailterrain',
  templateUrl: './modaldetailterrain.component.html',
  styleUrls: ['./modaldetailterrain.component.css']
})
export class ModaldetailterrainComponent implements OnInit {

  // tslint:disable-next-line: max-line-length
  constructor(private servi: ServiceRechercheterrainService, private http: HttpClient, private dialogRef: MatDialogRef<ModaldetailterrainComponent>, private dialog: MatDialog, private _ngZone: NgZone) { }

  detail = this.servi.myDataT;

  @ViewChild('autosize', {static: false}) autosize: CdkTextareaAutosize;

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1))
        .subscribe(() => this.autosize.resizeToFitContent(true));
  }

  closeDialog() {
  this.dialogRef.close('Pizza!');
  }

  envoieMessage(message) {
    this.http.put('http://localhost:8086/insertDemande/1/' + this.detail.id , message).subscribe(
      data => {

      }, err => {
        console.log(err);
      }
    );
  }

  ngOnInit() {
  }

}
