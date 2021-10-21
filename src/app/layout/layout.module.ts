import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './main-layout/components/header/header.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './main-layout/components/header/navbar/navbar.component';

@NgModule({
  declarations: [HeaderComponent, MainLayoutComponent, NavbarComponent],
  imports: [CommonModule, RouterModule],
  exports: [MainLayoutComponent],
})
export class LayoutModule {}
