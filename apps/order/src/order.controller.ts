import { GrpcService } from '@app/grpc';
import { Controller, Get, Logger } from '@nestjs/common';
import { OrderService } from './order.service';

@Controller()
export class OrderController {
  constructor(
    private readonly orderService: OrderService,
    private readonly grpcService: GrpcService,
  ) {}

  @Get()
  getHello(): string {
    return this.orderService.getHello();
  }

  @Get('grpc')
  public getFullNameById() {
    Logger.debug(`getFullNameById`);
    return this.grpcService.getFullNameById('adasd');
  }
}
