import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuspiciousChecksComponent } from './suspicious-checks.component';

describe('SuspiciousChecksComponent', () => {
  let component: SuspiciousChecksComponent;
  let fixture: ComponentFixture<SuspiciousChecksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuspiciousChecksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuspiciousChecksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
