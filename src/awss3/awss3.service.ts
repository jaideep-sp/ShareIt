import { Injectable } from '@nestjs/common';
import { S3 } from 'aws-sdk';


@Injectable()
export class Awss3Service {
  private readonly s3: S3;

  constructor() {
    this.s3 = new S3({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      
    });
  }

  async uploadFile(file: any, folderName: string): Promise<string> {
    const params = {
      Bucket: "s3shareit",
      Key: `${folderName}/${file.originalname}`,
      Body: file.buffer,
      ContentType: file.mimetype,
    };

    const result = await this.s3.upload(params).promise();
    return result.Location;
  }
  async deleteFile(key: string): Promise<void> {
    const params = {
      Bucket: process.env.AWS_BUCKET,
      Key: key,
      
    };
    const result = await this.s3.deleteObject(params).promise();
    console.log(result);
    
  }
  async viewList(bucketName: string): Promise<S3.ObjectList> {
    try {
      const response = await this.s3.listObjectsV2({ Bucket: bucketName }).promise();
      return response.Contents;
    } catch (error) {
      console.error(error);
      throw error;
    }
}

}