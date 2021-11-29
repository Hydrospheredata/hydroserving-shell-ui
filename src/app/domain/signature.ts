export interface Field {
  name: string;
  shape: number[];
  dtype: string;
  profile: string;
}

export default interface Signature {
  inputs: Field[];
  outputs: Field[];
}
