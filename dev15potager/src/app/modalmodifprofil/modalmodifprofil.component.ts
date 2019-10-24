import { Injectable, Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modalmodifprofil',
  templateUrl: './modalmodifprofil.component.html',
  styleUrls: ['./modalmodifprofil.component.css']
})


export class ModalmodifprofilComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private route: Router, private dialogRef: MatDialogRef<ModalmodifprofilComponent>, private dialog: MatDialog) { }

  ngOnInit() {
  }

  modalQuit(){
    //console.log('start');
    this.dialogRef.close();
    this.route.navigate(['/espaceperso/modifprofil']);
    //console.log('end');
  }

}
