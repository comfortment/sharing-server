export type Path = string;

export type ProcessState = "recruiting" | "paid" | "processing" | "done";

export type ProductType = "bundle" | "joint" | "rummage_sale" | "worker";

export interface BaseProduct {
  imagePath?: Path;
  type: ProductType;
  price: number;
  expiry: string;
  description?: string;
  payAt: "advanced" | "deferred";
  title: string;
  star: boolean;
  processState: ProcessState;
}

export interface BundleProduct extends BaseProduct {
  referTo: Path;
}

export interface JointProduct extends BaseProduct {
  referTo: Path;
}

export interface RummageSaleProduct extends BaseProduct { }

export interface WorkerProduct extends BaseProduct { }
