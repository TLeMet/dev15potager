import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MyexempledialogComponent } from '../myexempledialog/myexempledialog.component';
import { MymodeljoComponent } from '../mymodeljo/mymodeljo.component';

@Component({
  selector: 'app-mydialogjo',
  templateUrl: './mydialogjo.component.html',
  styleUrls: ['./mydialogjo.component.css']
})
export class MydialogjoComponent implements OnInit {


  ngOnInit() {
  }

  animal: string;
  name: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(MyexempledialogComponent, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}


