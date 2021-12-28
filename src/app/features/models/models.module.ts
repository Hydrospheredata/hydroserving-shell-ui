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
  ],
  imports: [
    CommonModule,
    ModelsRoutingModule,
    MatSnackBarModule,
    ReportModule,
    HsUiKitModule,
  ],
  exports: [ModelsComponent],
})
export class ModelsModule {}
