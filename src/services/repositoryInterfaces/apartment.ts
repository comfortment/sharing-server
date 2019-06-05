export interface ApartmentRepository {
  findOne(id: string): Promise<any>;
}
