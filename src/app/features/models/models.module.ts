import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModelsRoutingModule } from './models-routing.module';
import { ModelsSidebarComponent } from './components/models-sidebar/models-sidebar.component';
import { ModelsTableComponent } from './components/models-table/models-table.component';
import { ModelsComponent } from './models.component';
import { ModelStatusComponent } from './components/model-status/model-status.component';
import { ModelDetailsComponent } from './components/model-details/model-details.component';
import { ModelInfoComponent } from './components/model-details/components/model-info/model-info.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ReportModule } from '../report/report.module';
import { HsUiKitModule } from '@hydrosphere/hs-ui-kit';
import { SignatureComponent } from './components/model-details/components/signature/signature.component';
import { NavigationWrapperComponent } from './components/navigation-wrapper/navigation-wrapper.component';
import { ModelFormComponent } from './components/model-form/model-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldGroupComponent } from './components/model-form/components/field-group/field-group.component';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [
    ModelsComponent,
    ModelsSidebarComponent,
    ModelsTableComponent,
    ModelStatusComponent,
    ModelDetailsComponent,
    ModelInfoComponent,
    SignatureComponent,
    NavigationWrapperComponent,
    ModelFormComponent,
    FieldGroupComponent,
  ],
  imports: [
    CommonModule,
    ModelsRoutingModule,
    MatSnackBarModule,
    ReportModule,
    HsUiKitModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatDividerModule,
  ],
  exports: [ModelsComponent],
})
export class ModelsModule {}
