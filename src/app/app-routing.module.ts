import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModelDetailsComponent } from './features/models/components/model-details/model-details.component';
import { ModelsTableComponent } from './features/models/components/models-table/models-table.component';
import { ModelsComponent } from './features/models/models.component';
import { PluginsComponent } from './features/plugins/plugins.component';
import { ReportComponent } from './features/report/report/report.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { CanActivateModelGuard } from './can-activate-model.guard';
import { CanActivateModelVersionGuard } from './can-activate-model-version.guard';
import { NavigationWrapperComponent } from '@app/features/models/components/navigation-wrapper/navigation-wrapper.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'models',
        children: [
          {
            path: '',
            component: ModelsComponent,
            children: [
              {
                path: ':modelName',
                component: ModelsTableComponent,
                canActivate: [CanActivateModelGuard],
              },
            ],
          },
          {
            path: ':modelName/:modelVersion',
            component: NavigationWrapperComponent,
            children: [
              {
                path: '',
                component: ModelDetailsComponent,
                canActivate: [CanActivateModelVersionGuard],
              },
              {
                path: 'report/:file',
                component: ReportComponent,
              },
            ],
          },
        ],
      },
      {
        path: 'plugins',
        component: PluginsComponent,
        // loadChildren: () =>
        //   import('./features/plugins/plugins.module').then((m) => m.PluginsModule),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'models',
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      paramsInheritanceStrategy: 'always',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
