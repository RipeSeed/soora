import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';
import { Tokens } from './types';
import { Request } from 'express';
import { AtGuards, RtGuards } from 'src/common/guards';
import { GetCurrentUser } from 'src/common/decorators';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.CREATED)
  @Post('/local/signup')
  signupLocal(@Body() dto: AuthDto): Promise<Tokens> {
    return this.authService.signupLocal(dto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('/local/signin')
  signinLocal(@Body() dto: AuthDto): Promise<Tokens> {
    return this.authService.signinLocal(dto);
  }

  @UseGuards(AtGuards)
  @HttpCode(HttpStatus.OK)
  @Post('logout')
  logout(@GetCurrentUser('email') email: string) {
    return this.authService.logout(email);
  }

  @UseGuards(RtGuards)
  @HttpCode(HttpStatus.OK)
  @Post('/refresh')
  refreshTokens(
    @GetCurrentUser('refreshToken') refreshToken: string,
    @GetCurrentUser('sub') userId: number,
  ) {
    return this.authService.refreshTokens(userId, refreshToken);
  }
}
