import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyexempledialogComponent } from './myexempledialog.component';

describe('MyexempledialogComponent', () => {
  let component: MyexempledialogComponent;
  let fixture: ComponentFixture<MyexempledialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyexempledialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyexempledialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
