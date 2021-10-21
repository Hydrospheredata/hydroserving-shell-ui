import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeVersionsSidebarComponent } from './mode-versions-sidebar.component';

describe('ModeVersionsSidebarComponent', () => {
  let component: ModeVersionsSidebarComponent;
  let fixture: ComponentFixture<ModeVersionsSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModeVersionsSidebarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeVersionsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
