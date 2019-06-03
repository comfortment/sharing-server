export type Path = string;

export type ProcessState = "recruiting" | "paid" | "processing" | "done";

export type NanumType = "bundle" | "joint" | "rummage_sale" | "worker";

export interface Nanum {
  id: string;
  imagePath?: Path;
  type: NanumType;
  price: number;
  expiry: string;
  description?: string;
  payAt?: "advanced" | "deferred";
  title: string;
  processState: ProcessState;
  referTo?: Path;
}
