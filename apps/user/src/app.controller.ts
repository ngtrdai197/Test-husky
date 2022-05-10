import { Controller, Get } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @GrpcMethod('UserService', 'FindName')
  findOne(data: any, metadata: any) {
    console.log('Data query received :>> ', JSON.stringify(data));
    return { fullName: 'GRPC - Dai Nguyen' };
  }
}
