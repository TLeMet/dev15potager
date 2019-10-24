import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-importimage',
  templateUrl: './importimage.component.html',
  styleUrls: ['./importimage.component.css']
})
export class ImportimageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
export class MyFileUploadComponent {
  selectedFile: File;

  constructor(private http: HttpClient) { }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    this.http.post('my-backend.com/file-upload', this.selectedFile)
    .subscribe(
      event => {
        console.log(event);
      });
  }
}
