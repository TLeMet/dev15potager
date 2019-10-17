import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MydialogjoComponent } from './mydialogjo.component';

describe('MydialogjoComponent', () => {
  let component: MydialogjoComponent;
  let fixture: ComponentFixture<MydialogjoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MydialogjoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MydialogjoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
