import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModelVersionsRoutingModule } from './model-versions-routing.module';
import { ModeVersionsSidebarComponent } from './components/mode-versions-sidebar/mode-versions-sidebar.component';
import { ModelVersionsTableComponent } from './components/model-versions-table/model-versions-table.component';
import { ModelVersionsComponent } from './model-versions.component';
import { ModelVersionStatusComponent } from './components/model-version-status/model-version-status.component';
import { ModelVersionDetailsComponent } from './components/model-version-details/model-version-details.component';
import { ModelVersionInfoComponent } from './components/model-version-details/components/model-version-info/model-version-info.component';

@NgModule({
  declarations: [
    ModelVersionsComponent,
    ModeVersionsSidebarComponent,
    ModelVersionsTableComponent,
    ModelVersionStatusComponent,
    ModelVersionDetailsComponent,
    ModelVersionInfoComponent,
  ],
  imports: [CommonModule, ModelVersionsRoutingModule],
  exports: [ModelVersionsComponent],
})
export class ModelVersionsModule {}
