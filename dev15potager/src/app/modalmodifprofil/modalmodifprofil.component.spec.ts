import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalmodifprofilComponent } from './modalmodifprofil.component';

describe('ModalmodifprofilComponent', () => {
  let component: ModalmodifprofilComponent;
  let fixture: ComponentFixture<ModalmodifprofilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalmodifprofilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalmodifprofilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
