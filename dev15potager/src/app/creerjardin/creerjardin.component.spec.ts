import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerjardinComponent } from './creerjardin.component';

describe('CreerjardinComponent', () => {
  let component: CreerjardinComponent;
  let fixture: ComponentFixture<CreerjardinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreerjardinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreerjardinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
