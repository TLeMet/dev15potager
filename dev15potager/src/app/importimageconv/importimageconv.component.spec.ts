import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportimageconvComponent } from './importimageconv.component';

describe('ImportimageconvComponent', () => {
  let component: ImportimageconvComponent;
  let fixture: ComponentFixture<ImportimageconvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportimageconvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportimageconvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
