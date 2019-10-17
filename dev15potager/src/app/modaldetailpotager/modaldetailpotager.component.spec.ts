import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaldetailpotagerComponent } from './modaldetailpotager.component';

describe('ModaldetailpotagerComponent', () => {
  let component: ModaldetailpotagerComponent;
  let fixture: ComponentFixture<ModaldetailpotagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModaldetailpotagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModaldetailpotagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
