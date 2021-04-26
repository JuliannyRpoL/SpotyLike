import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFoundOrgComponent } from './page-not-found-org.component';

describe('PageNotFoundOrgComponent', () => {
  let component: PageNotFoundOrgComponent;
  let fixture: ComponentFixture<PageNotFoundOrgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNotFoundOrgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotFoundOrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
