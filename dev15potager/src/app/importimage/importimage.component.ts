import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Image } from '../model/Image';
import { Router } from '@angular/router';
import { Terrain } from '../model/Terrain';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-importimage',
  templateUrl: './importimage.component.html',
  styleUrls: ['./importimage.component.css']
})
export class ImportimageComponent implements OnInit {

  selectedFile: File = null;

  import: Image = new Image();
  ter: Terrain = new Terrain();
  imgURL: any;
  ok;
  visible = false;

  trueFalse() {
    this.visible = true;
  }

  constructor(private http: HttpClient, private route: Router, private dialogRef: MatDialogRef<ImportimageComponent>) { }

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

    this.import.name = desc;
    this.import.image = window.btoa(this.ok);
    this.import.terrain = this.ter;

    // tslint:disable-next-line: no-angle-bracket-type-assertion
    this.http.post('http://localhost:8086/uploadGroupImage/1', this.import)
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



