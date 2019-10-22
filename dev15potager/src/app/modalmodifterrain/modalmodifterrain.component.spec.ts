import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalmodifterrainComponent } from './modalmodifterrain.component';

describe('ModalmodifterrainComponent', () => {
  let component: ModalmodifterrainComponent;
  let fixture: ComponentFixture<ModalmodifterrainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalmodifterrainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalmodifterrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
