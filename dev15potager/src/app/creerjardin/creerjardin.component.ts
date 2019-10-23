import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-creerjardin',
  templateUrl: './creerjardin.component.html',
  styleUrls: ['./creerjardin.component.css']
})
export class CreerjardinComponent implements OnInit {
  options: FormGroup;

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      floatLabel: 'auto',
    });
   }

  ngOnInit() {
  }

}
