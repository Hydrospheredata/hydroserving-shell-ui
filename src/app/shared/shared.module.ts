import { NgModule } from '@angular/core';
import { Base64Pipe } from '@app/shared/pipes/base64.pipe';
import { HsUiKitModule } from '@hydrosphere/hs-ui-kit';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';

const reExportedModules = [
  CommonModule,
  HsUiKitModule,
  MatTableModule,
  MatTooltipModule,
  MatSnackBarModule,
];

@NgModule({
  declarations: [Base64Pipe],
  imports: [...reExportedModules],
  exports: [Base64Pipe, ...reExportedModules],
})
export class SharedModule {}
