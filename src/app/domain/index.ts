import Signature from './signature';

export interface Model {
  name: string;
  version: number;
  signature: Signature;
  metadata: Map<string, string>;
  trainingDataPrefix: string;
  inferenceDataPrefix: string;
}

export const createModel = (props: any): Model => {
  return {
    name: props.name,
    version: props.version,
    signature: props.signature,
    metadata: props.metadata || new Map(),
    trainingDataPrefix: props.trainingDataPrefix,
    inferenceDataPrefix: props.inferenceDataPrefix,
  };
};
