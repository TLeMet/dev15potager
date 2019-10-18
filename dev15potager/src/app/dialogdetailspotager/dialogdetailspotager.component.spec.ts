import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogdetailspotagerComponent } from './dialogdetailspotager.component';

describe('DialogdetailspotagerComponent', () => {
  let component: DialogdetailspotagerComponent;
  let fixture: ComponentFixture<DialogdetailspotagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogdetailspotagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogdetailspotagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
