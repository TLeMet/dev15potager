import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersushiComponent } from './usersushi.component';

describe('UsersushiComponent', () => {
  let component: UsersushiComponent;
  let fixture: ComponentFixture<UsersushiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersushiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersushiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
