import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserbananeComponent } from './userbanane.component';

describe('UserbananeComponent', () => {
  let component: UserbananeComponent;
  let fixture: ComponentFixture<UserbananeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserbananeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserbananeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
