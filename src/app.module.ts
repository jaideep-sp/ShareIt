import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Awss3Module } from './awss3/awss3.module';

@Module({
  imports: [Awss3Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
