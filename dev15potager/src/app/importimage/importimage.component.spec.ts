import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportimageComponent } from './importimage.component';

describe('ImportimageComponent', () => {
  let component: ImportimageComponent;
  let fixture: ComponentFixture<ImportimageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportimageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
