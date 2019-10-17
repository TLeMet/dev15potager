import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MydialogjoComponent } from '../mydialogjo/mydialogjo.component';

@Component({
  selector: 'app-myexempledialog',
  templateUrl: './myexempledialog.component.html',
  styleUrls: ['./myexempledialog.component.css']
})
export class MyexempledialogComponent implements OnInit {

  ngOnInit() {
  }
  constructor(
    public dialogRef: MatDialogRef<MydialogjoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}



export interface DialogData {
  animal: string;
  name: string;
}

