import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInOrganismComponent } from './sign-in-org.component';

describe('SignInComponent', () => {
  let component: SignInOrganismComponent;
  let fixture: ComponentFixture<SignInOrganismComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignInOrganismComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInOrganismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
