import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogjardincreeComponent } from './dialogjardincree.component';

describe('DialogjardincreeComponent', () => {
  let component: DialogjardincreeComponent;
  let fixture: ComponentFixture<DialogjardincreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogjardincreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogjardincreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
