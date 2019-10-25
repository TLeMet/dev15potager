import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogdemandeenvoyeeComponent } from './dialogdemandeenvoyee.component';

describe('DialogdemandeenvoyeeComponent', () => {
  let component: DialogdemandeenvoyeeComponent;
  let fixture: ComponentFixture<DialogdemandeenvoyeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogdemandeenvoyeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogdemandeenvoyeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
