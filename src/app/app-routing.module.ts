import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModelDetailsComponent } from './features/models/components/model-details/model-details.component';
import { ModelsTableComponent } from './features/models/components/models-table/models-table.component';
import { ModelsComponent } from './features/models/models.component';
import { PluginsComponent } from './features/plugins/plugins.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { CanActivateModelGuard } from './can-activate-model.guard';
import { CanActivateModelVersionGuard } from './can-activate-model-version.guard';
import { ModelFormComponent } from '@app/features/models/components/model-form/model-form.component';
import { NavigationWrapperComponent } from '@app/features/models/components/navigation-wrapper/navigation-wrapper.component';
import { ReportComponent } from '@app/features/report/report/report.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'models',
        children: [
          {
            path: 'add',
            component: ModelFormComponent,
          },
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
                path: 'overall-report/:file',
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
