import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MymodeljoComponent } from './mymodeljo.component';

describe('MymodeljoComponent', () => {
  let component: MymodeljoComponent;
  let fixture: ComponentFixture<MymodeljoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MymodeljoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MymodeljoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
