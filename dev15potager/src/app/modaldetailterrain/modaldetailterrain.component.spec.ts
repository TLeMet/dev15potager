import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaldetailterrainComponent } from './modaldetailterrain.component';

describe('ModaldetailterrainComponent', () => {
  let component: ModaldetailterrainComponent;
  let fixture: ComponentFixture<ModaldetailterrainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModaldetailterrainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModaldetailterrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
