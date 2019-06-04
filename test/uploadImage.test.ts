import uploadImage from "../src/services/nanum/uploadImage";
import * as AWSMock from "aws-sdk-mock";
import * as AWS from "aws-sdk";
import { PutObjectRequest } from "aws-sdk/clients/s3";

describe("uploadImage", () => {
  it("will upload image", async cb => {
    const SUCCESSFUL_LOCATION = "Successful location!";

    AWSMock.setSDKInstance(AWS);
    AWSMock.mock("S3", "upload", (_: PutObjectRequest, callback: Function) => {
      callback(null, { Location: SUCCESSFUL_LOCATION });
    });

    const fakeImage = Buffer.from("fakefakefakefakefakefakefakefakefakefakefakefakefakefakefake");
    const location = await uploadImage(fakeImage, new AWS.S3());

    AWSMock.restore();

    expect(location).toEqual(SUCCESSFUL_LOCATION);
    cb();
  });
});
