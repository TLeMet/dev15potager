import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'dialogconnexion',
  templateUrl: './dialogconnexion.component.html',
  styleUrls: ['./dialogconnexion.component.css']
})
export class DialogconnexionComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<DialogconnexionComponent>) { }


  fermerDialog(): void {
    this.dialogRef.close();
  }


  ngOnInit() {
  }

}
