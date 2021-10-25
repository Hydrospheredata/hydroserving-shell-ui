import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModelsRoutingModule } from './models-routing.module';
import { ModelsSidebarComponent } from './components/models-sidebar/models-sidebar.component';
import { ModelsTableComponent } from './components/models-table/models-table.component';
import { ModelsComponent } from './models.component';
import { ModelStatusComponent } from './components/model-status/model-status.component';
import { ModelDetailsComponent } from './components/model-details/model-details.component';
import { ModelInfoComponent } from './components/model-details/components/model-info/model-info.component';

@NgModule({
  declarations: [
    ModelsComponent,
    ModelsSidebarComponent,
    ModelsTableComponent,
    ModelStatusComponent,
    ModelDetailsComponent,
    ModelInfoComponent,
  ],
  imports: [CommonModule, ModelsRoutingModule],
  exports: [ModelsComponent],
})
export class ModelsModule {}
