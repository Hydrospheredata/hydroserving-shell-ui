import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { ApplicationsModule } from './features/applications/applications.module';
import { HttpClientModule } from '@angular/common/http';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { PluginsModule } from './features/plugins/plugins.module';
import { MatTableModule } from '@angular/material/table';
import { hsAbsoluteUrlFactory, HS_ABSOLUTE_URL } from './base_url.token';
import { APP_BASE_HREF } from '@angular/common';
import { baseHrefFactory } from './base-href-factory.util';
import { ModelsModule } from './features/models/models.module';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ReportModule } from './features/report/report.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AkitaNgRouterStoreModule,
    BrowserModule,
    BrowserAnimationsModule,
    PluginsModule,
    ModelsModule,
    ReportModule,
    LayoutModule,
    ApplicationsModule,
    HttpClientModule,
    AppRoutingModule,
    AkitaNgRouterStoreModule,
    MatTableModule,
    MatTooltipModule,
    MatSnackBarModule,
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useFactory: () => baseHrefFactory(),
    },
    {
      provide: HS_ABSOLUTE_URL,
      useFactory: (href: any) => hsAbsoluteUrlFactory(href),
      deps: [APP_BASE_HREF],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
