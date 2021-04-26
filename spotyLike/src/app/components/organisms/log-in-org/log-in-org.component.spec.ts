import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInOrganismComponent } from './log-in-org.component';

describe('LogInComponent', () => {
  let component: LogInOrganismComponent;
  let fixture: ComponentFixture<LogInOrganismComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogInOrganismComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogInOrganismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
