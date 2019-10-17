import { Component, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'modaldetailpotager',
  templateUrl: './modaldetailpotager.component.html',
  styleUrls: ['./modaldetailpotager.component.css']
})
export class ModaldetailpotagerComponent {
  constructor(
    private dialog: MatDialog
  ){}
  openDialogWithTemplateRef(templateRef: TemplateRef<any>) {
    this.dialog.open(templateRef);
  }

}