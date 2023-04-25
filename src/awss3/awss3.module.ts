import { Module } from '@nestjs/common';
import { Awss3Service } from './awss3.service';
import { Awss3Controller } from './awss3.controller';



@Module({
  providers: [Awss3Service],
  controllers: [Awss3Controller]
})
export class Awss3Module {}
