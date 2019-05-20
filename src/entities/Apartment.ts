export interface ApartmentInformation {
  id: string;
  buildingNumber: number;
  roomNumber: number;
  ownerName: string;
  phoneNumber: string;
  bankAccount?: string;
  bank?: string;
  disturbTimeRange: [number, number][];
  acceptedDecibel: number;
  hateNoiseDescription: string;
  hateSmellDescription: string;
  etc: string;
}
