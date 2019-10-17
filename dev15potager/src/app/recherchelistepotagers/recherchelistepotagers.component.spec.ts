import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecherchelistepotagersComponent } from './recherchelistepotagers.component';

describe('RecherchelistepotagersComponent', () => {
  let component: RecherchelistepotagersComponent;
  let fixture: ComponentFixture<RecherchelistepotagersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecherchelistepotagersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecherchelistepotagersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
