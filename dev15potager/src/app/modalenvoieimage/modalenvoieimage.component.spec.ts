import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalenvoieimageComponent } from './modalenvoieimage.component';

describe('ModalenvoieimageComponent', () => {
  let component: ModalenvoieimageComponent;
  let fixture: ComponentFixture<ModalenvoieimageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalenvoieimageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalenvoieimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
