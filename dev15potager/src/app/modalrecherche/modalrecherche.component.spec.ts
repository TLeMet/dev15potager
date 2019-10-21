import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalrechercheComponent } from './modalrecherche.component';

describe('ModalrechercheComponent', () => {
  let component: ModalrechercheComponent;
  let fixture: ComponentFixture<ModalrechercheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalrechercheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalrechercheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
