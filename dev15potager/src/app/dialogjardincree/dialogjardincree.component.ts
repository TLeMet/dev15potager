import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'dialogjardincree',
  templateUrl: './dialogjardincree.component.html',
  styleUrls: ['./dialogjardincree.component.css']
})
export class DialogjardincreeComponent implements OnInit {

  constructor(private route: Router, private dialogRef: MatDialogRef<DialogjardincreeComponent>) { }

  okJardinCree() {
    this.fermerDialog();
    location.reload();

  }

  fermerDialog(){
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
