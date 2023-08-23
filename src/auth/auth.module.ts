import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { AtStrategy, RtStrategy } from './strategies';

@Module({
  providers: [AuthService],
  controllers: [AuthController, AtStrategy, RtStrategy],
})
export class AuthModule {}