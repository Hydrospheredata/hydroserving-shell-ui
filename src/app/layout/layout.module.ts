import { NgModule } from '@angular/core';
import { HeaderComponent } from './main-layout/components/header/header.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './main-layout/components/header/navbar/navbar.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [HeaderComponent, MainLayoutComponent, NavbarComponent],
  imports: [SharedModule, RouterModule],
  exports: [MainLayoutComponent],
})
export class LayoutModule {}
