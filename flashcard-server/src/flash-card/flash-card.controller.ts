import { Controller } from '@nestjs/common';
import { FlashCardService } from './flash-card.service';
import { MessagePattern } from '@nestjs/microservices';
import { FlashCardDto } from './dto/flashcard.dto';

@Controller('flash-card')
export class FlashCardController {
  constructor(private flashCardService: FlashCardService) {}

  @MessagePattern({ cmd: 'get-flashcards' })
  handleGetFlashcards(email: { [key: string]: string }) {
    return this.flashCardService.getFlashcards(email);
  }

  @MessagePattern({ cmd: 'create-flashcard' })
  handleCreateFlashcard(data: { email: string; dto: FlashCardDto }) {
    return this.flashCardService.createFlashcard(data);
  }

  @MessagePattern({ cmd: 'delete-flashcard' })
  handleDeleteFlashcard(data: { email: string; id: string }) {
    return this.flashCardService.deleteFlashcard(data);
  }

  @MessagePattern({ cmd: 'update-flashcard' })
  handleUpdateFlashcard(data: {
    email: string;
    id: string;
    dto: FlashCardDto;
  }) {
    return this.flashCardService.updateFlashcard(data);
  }

  @MessagePattern({ cmd: 'get-single-flashcard' })
  handleGetSingleFlashCards(data: { email: string; id: string }) {
    return this.flashCardService.getSingleFlashCards(data);
  }

  @MessagePattern({ cmd: 'get-user-flashcards' })
  handleGetUserFlashCards(data: { email: string }) {
    return this.flashCardService.getUserFlashCards(data);
  }
}
