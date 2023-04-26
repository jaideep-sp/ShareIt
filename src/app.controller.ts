import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('example')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post('exampleRoute/:param1/:param2')
  exampleRoute(
    @Body('param3') param3: string,
    @Param('param1') param1: string,
    @Param('param2') param2: number,
  ): void {
    console.log(param1, param2, param3);
  }
}

