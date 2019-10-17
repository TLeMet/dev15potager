import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributacosComponent } from './attributacos.component';

describe('AttributacosComponent', () => {
  let component: AttributacosComponent;
  let fixture: ComponentFixture<AttributacosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttributacosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributacosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
