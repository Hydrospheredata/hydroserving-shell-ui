import { Plugin } from '../state/plugin.model';

export const mockPlugin: Plugin = {
  name: 'Visualization',
  description: 'Service for visualization of high dimensional for hydrosphere',
  iconUrl: 'url',
  state: 'not_active',
  metadata: {
    remoteEntry: `http://localhost:8000/static/remoteEntry.js`,
    remoteName: 'hydrosphereVisUi',
    exposedModule: './Module',
    displayName: 'vis',
    routePath: 'vis',
    ngModuleName: 'VisualizationModule',
  },
};

export const driftReportPluginMock: Plugin = {
  name: 'Drift report',
  description: 'Service for visualization of high dimensional for hydrosphere',
  iconUrl: 'url',
  state: 'not_active',
  metadata: {
    remoteEntry: `http://localhost:5005/static/remoteEntry.js`,
    remoteName: 'hydrosphereStatUi',
    exposedModule: './Module',
    displayName: 'drift_report',
    routePath: 'drift_report',
    ngModuleName: 'StatModule',
  },
};

export const profilerPlugin: Plugin = {
  name: 'Profiler',
  description: 'Outlier detection',
  iconUrl: 'url',
  state: 'active',
  metadata: {
    remoteEntry: `http://localhost:5000/static/remoteEntry.js`,
    remoteName: 'hydrosphereProfiler',
    exposedModule: './Module',
    displayName: 'profiler',
    routePath: 'profiler',
    ngModuleName: 'DashboardModule',
  },
};
