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

export interface ProfilerReport {
  batchStats: {
    susRatio: number;
    susVerdict: string;
    failRatio: number;
  };
}

export interface DataDriftReport {
  featuresNumber: number;
  driftedFeatures: string[];
}

export interface OverallReport {
  file: string;
  profilerReport: ProfilerReport | undefined;
  dataDriftReport: DataDriftReport | undefined;
}

export const generateProfilerReport = (
  report: Report | undefined,
): ProfilerReport | undefined => {
  if (report) {
    return {
      batchStats: report!.batchStats,
    };
  } else {
    return undefined;
  }
};

export const generateDataDriftReport = (
  report: Report | undefined,
): DataDriftReport | undefined => {
  if (report) {
    const featuresNumber = Object.keys(report!.featureReports).length;
    const driftedFeatures = Object.keys(report!.featureReports).filter(key => {
      return !report!.featureReports[key].every(
        (obj: { isGood: any }) => obj.isGood,
      );
    });
    return {
      featuresNumber,
      driftedFeatures,
    };
  } else {
    return undefined;
  }
};
