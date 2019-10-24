import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-modalwronginscription',
  templateUrl: './modalwronginscription.component.html',
  styleUrls: ['./modalwronginscription.component.css']
})


export class ModalwronginscriptionComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<ModalwronginscriptionComponent>, private dialog: MatDialog) { }

  ngOnInit() {
    
  }

}
