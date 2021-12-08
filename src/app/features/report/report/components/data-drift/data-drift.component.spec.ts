import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataDriftComponent } from './data-drift.component';

describe('DataDriftComponent', () => {
  let component: DataDriftComponent;
  let fixture: ComponentFixture<DataDriftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataDriftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataDriftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
