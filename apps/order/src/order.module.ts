import { GrpcModule } from '@app/grpc';
import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';

@Module({
  imports: [GrpcModule],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
