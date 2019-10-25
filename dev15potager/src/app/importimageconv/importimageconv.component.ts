import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ImageConv } from '../model/ImageConv';
import { Router } from '@angular/router';
import { Terrain } from '../model/Terrain';
import { MatDialogRef } from '@angular/material';
import { Image } from '../model/Image';

@Component({
  selector: 'app-importimageconv',
  templateUrl: './importimageconv.component.html',
  styleUrls: ['./importimageconv.component.css']
})
export class ImportimageconvComponent implements OnInit {

  selectedFile: File = null;

  import: Image = new Image();
  ter: Terrain = new Terrain();
  imgURL: any;
  ok;
  visible = false;
  ceTerrain = JSON.parse(localStorage.getItem("terrain"));
  usera = JSON.parse(localStorage.getItem('userConnecte'));

  trueFalse() {
    this.visible = true;
  }

  constructor(private http: HttpClient, private route: Router, private dialogRef: MatDialogRef<ImportimageconvComponent>) { }

  ngOnInit() {

  }

  onFileChanged(event) {
    console.log(event);
    this.selectedFile = event.target.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (event2) => {
      this.imgURL = reader.result;
      this.ok = reader.result;
    };
  }

  onUpload(desc) {

   // this.import.auteur = this.usera;
    this.import.name = desc;
   // this.import.message = desc;
    this.import.image = window.btoa(this.ok);
    this.import.terrain = this.ter;
   // console.log('import imag ',  this.import);

    // tslint:disable-next-line: no-angle-bracket-type-assertion
    this.http.post('http://localhost:8086/uploadGroupImage/' + this.ceTerrain.id, this.import)
    .subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err));
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
