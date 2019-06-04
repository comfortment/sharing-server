import { ApartmentRepository } from "./services/repositoryInterfaces/apartment";
import { LambdaApartmentModel } from "./data/models/apartment";

export class MockApartmentRepository implements ApartmentRepository {
  public async findOne(id: string): Promise<LambdaApartmentModel> {
    return {
      apartmentId: id,
      ownerName: "손승용",
      phoneNumber: "01012345678",
      roomNumber: 313,
    };
  }
}
