export type CurrentState = "recruiting" | "paid" | "processing" | "done";

export type NanumType = "bundle" | "joint" | "rummage_sale" | "worker";

export type PayAt = "advanced" | "deferred";

export type Path = string;

export type NanumId = string;

export interface Nanum {
  nanumId: NanumId;

  // from A.I
  roomNumber: number;
  ownerName: string;
  phoneNumber: string;

  // from Nanum
  type: NanumType;
  bankAccount?: string;
  bank?: string;
  imagePath?: string;
  price: number;
  expiry: number; // 1h == 1
  description?: string;
  referTo?: Path;
  payAt?: PayAt;
  title: string;
  currentState: CurrentState;
}
