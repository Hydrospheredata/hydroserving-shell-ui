import { ChangeDetectorRef, Component } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ModelsService } from '@app/features/models/state/models.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { createModel } from '@app/domain';

@Component({
  selector: 'hs-model-form',
  templateUrl: './model-form.component.html',
  styleUrls: ['./model-form.component.scss'],
})
export class ModelFormComponent {
  error: string | null = null;
  modelForm = this.fb.group({
    name: ['', [Validators.minLength(1), Validators.required]],
    version: ['', [Validators.min(1), Validators.required]],
    signature: this.fb.group({
      inputs: this.fb.array([this.fieldGroup]),
      outputs: this.fb.array([this.fieldGroup]),
    }),
    metadata: undefined,
    trainingDataPrefix: ['', [Validators.required]],
    inferenceDataPrefix: ['', [Validators.required]],
  });

  get inputs() {
    return this.modelForm.get('signature')?.get('inputs') as FormArray;
  }

  get outputs() {
    return this.modelForm.get('signature')?.get('outputs') as FormArray;
  }

  get fieldGroup() {
    return this.fb.group({
      name: ['', [Validators.required]],
      shape: this.fb.array([]),
      dtype: ['', [Validators.required]],
      profile: ['', [Validators.required]],
    });
  }

  constructor(
    private fb: FormBuilder,
    private service: ModelsService,
    private router: Router,
    private cdr: ChangeDetectorRef,
  ) {}

  addInputsField() {
    this.inputs.push(this.fieldGroup);
  }

  removeInputsField(i: number) {
    this.inputs.removeAt(i);
  }

  removeOutputsField(i: number) {
    this.outputs.removeAt(i);
  }

  addOutputsField() {
    this.outputs.push(this.fieldGroup);
  }

  onSubmit(): void {
    const model = createModel(this.modelForm.value);

    this.service.register(this.modelForm.value).subscribe(
      () => {
        this.service.add(model);
        this.router.navigate(['/', 'models', model.name, model.version]);
      },
      (err: HttpErrorResponse) => {
        this.error = err.error;
        this.cdr.detectChanges();
      },
    );
  }

  close() {
    this.router.navigate(['/', 'models']);
  }
}
