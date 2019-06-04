import { NanumRepository } from "../repositoryInterfaces/nanum";
import { NonExistNanumError, NonExistApartmentError } from "../../exception";
import { ApartmentId } from "../../types/nanum";
import { lambda } from "../../aws/index";
import { Nanum } from "../../entities/Nanum";


const getNanumDetail = async (repository: NanumRepository, nanumId: string): Promise<Nanum> => {
  let nanumDetail: Nanum;
  const broughtNanum = await repository.findOne(nanumId);
  if (!broughtNanum) {
    throw new NonExistNanumError();
  }

  const apartmentId: ApartmentId = broughtNanum.apartmentId;

  try {
    const { Payload: res } = await lambda.invoke(
      {FunctionName: process.env.AI_LAMBDA!, Payload: JSON.stringify({id: apartmentId})}
    ).promise();

    if (!res) { 
      throw new NonExistApartmentError();
    }
    
    const broughtApartment = JSON.parse(res.toString());
    
    nanumDetail = {...broughtNanum, ...broughtApartment};
  } catch (e) {
    console.error(e)
    throw new NonExistApartmentError();
  }

  return nanumDetail;
};

export default getNanumDetail;
