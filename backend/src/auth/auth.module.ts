import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

@Module({
  controllers: [AuthController],
  imports: [JwtModule],
  providers: [AuthService, AuthGuard, JwtModule],
  exports: [AuthService, AuthGuard, JwtModule],
})
export class AuthModule {}
