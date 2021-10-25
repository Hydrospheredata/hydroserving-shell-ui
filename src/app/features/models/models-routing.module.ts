import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const MVR: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(MVR)],
  exports: [RouterModule],
})
export class ModelsRoutingModule {}
