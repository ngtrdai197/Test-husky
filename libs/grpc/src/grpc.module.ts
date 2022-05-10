import { Module } from '@nestjs/common';
import {
  Client,
  ClientsModule,
  GrpcOptions,
  Transport,
} from '@nestjs/microservices';
import { join } from 'path';

import { GrpcService } from './grpc.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'GRPC_SERVICE',
        transport: Transport.GRPC,
        options: {
          package: 'user',
          protoPath: join(
            __dirname,
            '../../../libs/grpc/src/protos/user.proto',
          ),
          url: `localhost:3000`,
        },
      },
    ]),
  ],
  providers: [GrpcService],
  exports: [GrpcService],
})
export class GrpcModule {}
