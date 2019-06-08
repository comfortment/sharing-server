import { NanumRepository } from "../repositoryInterfaces/nanum";
import { ApartmentRepository } from "../repositoryInterfaces/apartment";
import { NanumType } from "../../entities/Nanum";
import { NanumModel } from "../../data/models/nanum";

const getNanumList = async (
  nanumRepository: NanumRepository,
  type?: NanumType,
  expiry?: number
) => {
  let filteredNanumWithType: NanumModel[];

  if (type) {
    filteredNanumWithType = await nanumRepository.find({ type });
  } else {
    filteredNanumWithType = await nanumRepository.find({});
  }

  let filteredNanumWithExpiry: NanumModel[];

  if (expiry) {
    filteredNanumWithExpiry = filteredNanumWithType.filter(value => value.expiry > expiry);
  } else {
    filteredNanumWithExpiry = filteredNanumWithType;
  }

  return filteredNanumWithExpiry;
};

export default getNanumList;
