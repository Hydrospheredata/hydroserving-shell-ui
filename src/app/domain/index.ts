import Signature from './signature';

export interface Model {
  name: string;
  version: number;
  signature: Signature;
  metadata: Map<string, string>;
  trainingDataPrefix: string;
  inferenceDataPrefix: string;
}
