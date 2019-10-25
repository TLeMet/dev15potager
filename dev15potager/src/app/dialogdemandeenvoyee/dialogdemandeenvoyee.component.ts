import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-dialogdemandeenvoyee',
  templateUrl: './dialogdemandeenvoyee.component.html',
  styleUrls: ['./dialogdemandeenvoyee.component.css']
})
export class DialogdemandeenvoyeeComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<DialogdemandeenvoyeeComponent>) { }

  ngOnInit() {
  }

  okDemandeEnvoyee() {
    this.fermerDialog();
    location.reload();
  }

  fermerDialog(){
    this.dialogRef.close();
  }

}
