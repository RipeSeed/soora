import { Module } from '@nestjs/common';
import { FlashCardController } from './flash-card.controller';
import { FlashCardService } from './flash-card.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  controllers: [FlashCardController],
  providers: [FlashCardService],
  imports: [
    ClientsModule.register([
      {
        name: 'FLASHCARDS',
        transport: Transport.TCP,
        options: {
          port: 3334,
        },
      },
    ]),
  ],
})
export class FlashCardModule {}
