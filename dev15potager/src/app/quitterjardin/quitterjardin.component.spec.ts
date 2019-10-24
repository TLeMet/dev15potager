import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuitterjardinComponent } from './quitterjardin.component';

describe('QuitterjardinComponent', () => {
  let component: QuitterjardinComponent;
  let fixture: ComponentFixture<QuitterjardinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuitterjardinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuitterjardinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
