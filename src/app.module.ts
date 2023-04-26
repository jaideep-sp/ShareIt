import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Awss3Module } from './awss3/awss3.module';
import { S3Module } from './s3/s3.module';

@Module({
  imports: [Awss3Module, S3Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
