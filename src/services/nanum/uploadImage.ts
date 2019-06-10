import { S3_BUCKET } from "../../constant/aws";
import uuid from "uuid/v4";

const uploadImage = async (image: Buffer, s3: AWS.S3): Promise<string> => {
  const decodedImage = Buffer.from(image.toString("ascii"), "base64");
  const fileName = uuid();
  const { Location } = await s3
    .upload({
      Body: decodedImage,
      Bucket: S3_BUCKET,
      Key: fileName,
      ContentType: "application/octet-stream",
      ACL: "public-read",
    })
    .promise();

  return Location;
};

export default uploadImage;
