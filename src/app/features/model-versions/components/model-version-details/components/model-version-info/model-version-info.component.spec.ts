import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelVersionInfoComponent } from './model-version-info.component';

describe('ModelVersionInfoComponent', () => {
  let component: ModelVersionInfoComponent;
  let fixture: ComponentFixture<ModelVersionInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelVersionInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelVersionInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
