import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModelVersionDetailsComponent } from './features/model-versions/components/model-version-details/model-version-details.component';
import { ModelVersionsTableComponent } from './features/model-versions/components/model-versions-table/model-versions-table.component';
import { ModelVersionsComponent } from './features/model-versions/model-versions.component';
import { PluginsComponent } from './features/plugins/plugins.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

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
            component: ModelVersionsComponent,
            children: [{ path: ':modelName', component: ModelVersionsTableComponent }],
          },
          {
            path: ':modelName/:modelVersion',
            component: ModelVersionDetailsComponent,
          },
        ],
      },
      {
        path: 'plugins',
        component: PluginsComponent,
        // loadChildren: () =>
        //   import('./features/plugins/plugins.module').then((m) => m.PluginsModule),
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
