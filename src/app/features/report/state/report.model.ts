export interface Report {
  pluginId: string;
  modelName: string;
  modelVersion: number;
  file: string;
  fileModifiedAt: string;
  featureReports: {
    [featureName: string]: Array<{ description: string; isGood: boolean }>;
  };
  batchStats: {
    susRatio: number;
    susVerdict: string;
    failRatio: number;
  };
}
