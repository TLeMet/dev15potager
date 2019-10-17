import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveburgerComponent } from './directiveburger.component';

describe('DirectiveburgerComponent', () => {
  let component: DirectiveburgerComponent;
  let fixture: ComponentFixture<DirectiveburgerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectiveburgerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveburgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
