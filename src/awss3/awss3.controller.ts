import { Body, Controller, Delete, Get, HttpCode, Param, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
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

  @HttpCode(204)
  @Delete('delete')
  async deleteFile(
   @Body('key') key: string
  )
    : Promise<void> {
    console.log("key",key);
   await this.s3Service.deleteFile(key);
    
  }
 
  @Get('list')
  async listFiles(
    @Body('bucket') bucket: string
  ){ 
    return await this.s3Service.viewList(bucket)
  }
  
}