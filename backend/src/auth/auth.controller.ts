import {
  Controller,
  Get,
  Post,
  UseGuards,
  Request,
} from '@nestjs/common';

import { AuthGuard } from './auth.guard';

export class LoginDto {
  code: string;
  state?: string;
}

export class TokenValidationDto {
  token: string;
}

@Controller('auth')
export class AuthController {
  @Get('profile')
  @UseGuards(AuthGuard)
  async getProfile(@Request() req) {
    return {
      success: true,
    };
  }

  @Post('logout')
  @UseGuards(AuthGuard)
  async logout() {
    // In a real application, you might want to blacklist the token
    return {
      success: true,
      message: 'Logged out successfully',
    };
  }
}
