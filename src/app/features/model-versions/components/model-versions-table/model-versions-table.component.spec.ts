import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelVersionsTableComponent } from './model-versions-table.component';

describe('ModelVersionsTableComponent', () => {
  let component: ModelVersionsTableComponent;
  let fixture: ComponentFixture<ModelVersionsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModelVersionsTableComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelVersionsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
