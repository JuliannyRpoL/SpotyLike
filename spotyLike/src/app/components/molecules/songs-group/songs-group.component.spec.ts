import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongsGroupComponent } from './songs-group.component';

describe('SongsGroupComponent', () => {
  let component: SongsGroupComponent;
  let fixture: ComponentFixture<SongsGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SongsGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SongsGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
