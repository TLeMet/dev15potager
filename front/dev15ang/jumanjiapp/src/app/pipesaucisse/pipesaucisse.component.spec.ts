import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesaucisseComponent } from './pipesaucisse.component';

describe('PipesaucisseComponent', () => {
  let component: PipesaucisseComponent;
  let fixture: ComponentFixture<PipesaucisseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipesaucisseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipesaucisseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
