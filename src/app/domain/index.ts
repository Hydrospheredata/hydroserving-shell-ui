export interface Field {
    name: string;
    shape: number[];
    dtype: string;
    profile: string;
}

export interface Signature {
    inputs: Field[],
    outputs: Field[]
}

export interface Model {
    name: string;
    version: number;
    signature: Signature;
    metadata: Map<string, string>;
    trainingDataPrefix: string;
    inferenceDataPrefix: string;
}
