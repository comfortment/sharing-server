import { lambda } from "../../aws";
import { NonExistApartmentError } from "../../exception";
import { ApartmentRepository } from "../../services/repositoryInterfaces/apartment";


export class LambdaApartmentRepository implements ApartmentRepository {
  private functionName: string;

  public constructor () {
    this.functionName = process.env.AI_LAMBDA!;
  }

  public async findOne(id: string) {
    const { Payload: res } = await lambda.invoke(
      {FunctionName: this.functionName, Payload: JSON.stringify({id})}
    ).promise();

    if (!res) {
      throw new NonExistApartmentError();
    }

    return JSON.parse(res.toString());
  }
}