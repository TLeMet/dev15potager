import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarPersoComponent } from './navbar-perso.component';

describe('NavbarPersoComponent', () => {
  let component: NavbarPersoComponent;
  let fixture: ComponentFixture<NavbarPersoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarPersoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarPersoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
