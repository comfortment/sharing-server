import { Lambda, Credentials, S3 } from "aws-sdk";

const awsConfig = {
  region: "ap-northeast-2",
  credentials: new Credentials({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  }),
};

export const lambda = new Lambda(awsConfig);

export const s3 = new S3(awsConfig);
