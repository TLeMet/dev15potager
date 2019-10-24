import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalwronginscriptionComponent } from './modalwronginscription.component';

describe('ModalwronginscriptionComponent', () => {
  let component: ModalwronginscriptionComponent;
  let fixture: ComponentFixture<ModalwronginscriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalwronginscriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalwronginscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
