import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingkebabComponent } from './bindingkebab.component';

describe('BindingkebabComponent', () => {
  let component: BindingkebabComponent;
  let fixture: ComponentFixture<BindingkebabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BindingkebabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BindingkebabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
