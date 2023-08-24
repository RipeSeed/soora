import { Module } from '@nestjs/common';
import { FlashCardModule } from './flash-card/flash-card.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [FlashCardModule, PrismaModule],
})
export class AppModule {}
