import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogconnexionComponent } from './dialogconnexion.component';

describe('DialogconnexionComponent', () => {
  let component: DialogconnexionComponent;
  let fixture: ComponentFixture<DialogconnexionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogconnexionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogconnexionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
