import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogdetaildemandeComponent } from './dialogdetaildemande.component';

describe('DialogdetaildemandeComponent', () => {
  let component: DialogdetaildemandeComponent;
  let fixture: ComponentFixture<DialogdetaildemandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogdetaildemandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogdetaildemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
