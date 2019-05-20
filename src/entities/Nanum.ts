export type Path = string;

interface BaseProduct {
  imagePath?: Path;
  price: number;
  expiry: Date;
  description?: string;
  payAt: "advanced" | "deferred";
  title: string;
}

export interface BundleProduct extends BaseProduct {
  referTo: Path;
}

export interface JointProduct extends BaseProduct {
  referTo: Path;
}

export interface RummageSaleProduct extends BaseProduct { }

export interface WorkerProduct extends BaseProduct { }
