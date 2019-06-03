type NanumId = string;

export interface ApartmentModel {
  id: string;
  stared: NanumId[];
  joined: NanumId[];
  raised: NanumId[];
}