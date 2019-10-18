import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilpersoComponent } from './accueilperso.component';

describe('AccueilpersoComponent', () => {
  let component: AccueilpersoComponent;
  let fixture: ComponentFixture<AccueilpersoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccueilpersoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilpersoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
