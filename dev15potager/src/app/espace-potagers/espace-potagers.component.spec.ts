import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspacePotagersComponent } from './espace-potagers.component';

describe('EspacePotagersComponent', () => {
  let component: EspacePotagersComponent;
  let fixture: ComponentFixture<EspacePotagersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspacePotagersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspacePotagersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
