// import { LoadRemoteModuleOptions } from '@angular-architects/module-federation';

// export type PluginState = 'active' | 'not_active';

// export interface Plugin {
//   name: string;
//   iconUrl: string;
//   description: string;
//   state: PluginState;
//   metadata: PluginMetadata;
// }

// export type PluginMetadata = LoadRemoteModuleOptions & {
//   displayName: string;
//   routePath: string;
//   ngModuleName: string;
// };

export interface Plugin {
  name: string;
  description: string;
  pluginInfo: {
    addr: string;
    routePath: string;
    ngModuleName: string;
    remoteEntry: string;
    remoteName: string;
    exposedModule: './Module';
  };
}
