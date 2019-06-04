import { Lambda, Credentials } from "aws-sdk";


export const lambda = new Lambda({
  region: "ap-northeast-2",
  credentials: new Credentials({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!
  }),
});