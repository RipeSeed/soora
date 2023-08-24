import { Module } from '@nestjs/common';
import { FlashCardService } from './flash-card.service';
import { FlashCardController } from './flash-card.controller';

@Module({
  providers: [FlashCardService],
  controllers: [FlashCardController],
})
export class FlashCardModule {}
