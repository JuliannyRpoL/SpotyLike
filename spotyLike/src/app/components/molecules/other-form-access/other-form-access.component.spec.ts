import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherFormAccessComponent } from './other-form-access.component';

describe('OtherFormAccessComponent', () => {
  let component: OtherFormAccessComponent;
  let fixture: ComponentFixture<OtherFormAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherFormAccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherFormAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
