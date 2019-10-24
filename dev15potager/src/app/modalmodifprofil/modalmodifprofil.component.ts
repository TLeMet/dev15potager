import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';

@Component({
  selector: 'app-modalmodifprofil',
  templateUrl: './modalmodifprofil.component.html',
  styleUrls: ['./modalmodifprofil.component.css']
})


export class ModalmodifprofilComponent implements OnInit {

  constructor( private dialogRef: MatDialogRef<ModalmodifprofilComponent>, private dialog: MatDialog) { }

  ngOnInit() {
  }

}
