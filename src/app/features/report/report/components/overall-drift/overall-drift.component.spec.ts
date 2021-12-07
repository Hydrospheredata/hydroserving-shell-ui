import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallDriftComponent } from './overall-drift.component';

describe('OverallDriftComponent', () => {
  let component: OverallDriftComponent;
  let fixture: ComponentFixture<OverallDriftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverallDriftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverallDriftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
