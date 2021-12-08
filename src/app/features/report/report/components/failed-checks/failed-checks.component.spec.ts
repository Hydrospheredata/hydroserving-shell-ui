import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FailedChecksComponent } from './failed-checks.component';

describe('FailedChecksComponent', () => {
  let component: FailedChecksComponent;
  let fixture: ComponentFixture<FailedChecksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FailedChecksComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FailedChecksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
