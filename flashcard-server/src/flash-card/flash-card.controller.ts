import { Controller } from '@nestjs/common';
import { FlashCardService } from './flash-card.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller('flash-card')
export class FlashCardController {
  constructor(private flashCardService: FlashCardService) {}

  @MessagePattern({ cmd: 'get-flashcards' })
  handleGetFlashcards(email: { [key: string]: string }) {
    return this.flashCardService.getFlashcards(email);
  }
}
