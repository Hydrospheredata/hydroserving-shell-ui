import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { ApplicationsModule } from './features/applications/applications.module';
import { HttpClientModule } from '@angular/common/http';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { PluginsModule } from './features/plugins/plugins.module';
import {
  hsAbsoluteUrlFactory,
  hsBaseUrlFactory,
  HS_ABSOLUTE_URL,
  HS_BASE_URL,
} from './base_url.token';
import { APP_BASE_HREF } from '@angular/common';
import { baseHrefFactory } from './base-href-factory.util';
import { ModelsModule } from './features/models/models.module';
import { ReportModule } from '@app/features/report/report.module';
import {
  hsIconsArrowLeft,
  hsIconsCheck,
  hsIconsChevronRight,
  hsIconsCircleX,
  hsIconsDc,
  hsIconsError,
  hsIconsErrorOutline,
  hsIconsHelp,
  hsIconsInfo,
  hsIconsModels,
  IconsRegistryService,
} from '@hydrosphere/hs-ui-kit';
import { SharedModule } from '@app/shared/shared.module';
import { AppService } from './state/app.service';
import { Observable } from 'rxjs';

function initializeAppFactory(service: AppService): () => Observable<any> {
  return () => service.preloadData();
}

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
    SharedModule,
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useFactory: () => baseHrefFactory(),
    },
    {
      provide: HS_BASE_URL,
      useFactory: (href: string) => hsBaseUrlFactory(href),
      deps: [APP_BASE_HREF],
    },
    {
      provide: HS_ABSOLUTE_URL,
      useFactory: (href: any) => hsAbsoluteUrlFactory(href),
      deps: [APP_BASE_HREF],
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeAppFactory,
      deps: [AppService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private iconRegistry: IconsRegistryService) {
    this.iconRegistry.registerIcons([
      hsIconsArrowLeft,
      hsIconsDc,
      hsIconsError,
      hsIconsCheck,
      hsIconsError,
      hsIconsHelp,
      hsIconsInfo,
      hsIconsModels,
      hsIconsChevronRight,
      hsIconsCircleX,
      hsIconsErrorOutline,
    ]);
  }
}
