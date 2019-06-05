import { ApartmentRepository } from "./services/repositoryInterfaces/apartment";
import { LambdaApartmentModel } from "./data/models/apartment";

export class MockApartmentRepository implements ApartmentRepository {
  private data: LambdaApartmentModel[] = [];

  public async findOne(id: string): Promise<LambdaApartmentModel> {
    return this.data.find(value => {
      return value.apartmentId === id;
    })!;
  }

  public pushMockObject(data: LambdaApartmentModel) {
    this.data.push(data);
  }
}
