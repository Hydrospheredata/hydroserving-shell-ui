import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModelDetailsComponent } from './features/models/components/model-details/model-details.component';
import { ModelsTableComponent } from './features/models/components/models-table/models-table.component';
import { ModelsComponent } from './features/models/models.component';
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
            component: ModelsComponent,
            children: [{ path: ':modelName', component: ModelsTableComponent }],
          },
          {
            path: ':modelName/:modelVersion',
            component: ModelDetailsComponent,
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
