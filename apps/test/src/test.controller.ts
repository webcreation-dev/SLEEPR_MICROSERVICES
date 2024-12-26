import { Controller, Get, UsePipes, ValidationPipe } from '@nestjs/common';
import { TestService } from './test.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Get()
  getHello(): string {
    return this.testService.getHello();
  }

  @MessagePattern('res_test_from_microservices')
  @UsePipes(new ValidationPipe())
  async res_test_from_microservices() {
    return { success: true };
  }
}
