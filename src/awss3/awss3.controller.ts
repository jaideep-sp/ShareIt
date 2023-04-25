import { Body, Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import {  FileInterceptor } from '@nestjs/platform-express';
import { Awss3Service } from './awss3.service';


@Controller('awss3')
export class Awss3Controller {
  constructor(private readonly s3Service: Awss3Service) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(
    @UploadedFile() file,
    @Body('folderName') folderName: string,
  ) {
    return await this.s3Service.uploadFile(file, folderName);
  }
}
