import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModelVersionDetailsComponent } from './components/model-version-details/model-version-details.component';
import { ModelVersionsTableComponent } from './components/model-versions-table/model-versions-table.component';
import { ModelVersionsComponent } from './model-versions.component';

export const MVR: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(MVR)],
  exports: [RouterModule],
})
export class ModelVersionsRoutingModule {}
