import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelVersionStatusComponent } from './model-version-status.component';

describe('ModelVersionStatusComponent', () => {
  let component: ModelVersionStatusComponent;
  let fixture: ComponentFixture<ModelVersionStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModelVersionStatusComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelVersionStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
