import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { IGrpcUserService } from './interfaces/user-proto.interface';

@Injectable()
export class GrpcService implements OnModuleInit {
  private grpcUserService: IGrpcUserService;

  constructor(
    @Inject('GRPC_SERVICE')
    private readonly grpcClient: ClientGrpc,
  ) {}

  public onModuleInit() {
    this.grpcUserService = this.grpcClient.getService('UserService');
  }

  getFullNameById(id: string) {
    return this.grpcUserService.FindName({ userId: id });
  }
}
