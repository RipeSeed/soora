import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { APP_GUARD } from '@nestjs/core';
import { AtGuards } from './common/guards';
import { FlashCardModule } from './flash-card/flash-card.module';

@Module({
  imports: [AuthModule, PrismaModule, FlashCardModule],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AtGuards,
    },
  ],
})
export class AppModule {}
