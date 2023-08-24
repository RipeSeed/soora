import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { FlashCardDto } from './dto';

@Injectable()
export class FlashCardService {
  constructor(
    @Inject('FLASHCARDS') private readonly flashCardClient: ClientProxy,
  ) {}

  async getFlashCards(email: string) {
    return await this.flashCardClient.send(
      { cmd: 'get-flashcards' },
      { email },
    );
  }

  async create(email: string, dto: FlashCardDto) {
    return await this.flashCardClient.send(
      { cmd: 'create-flashcard' },
      { email, dto },
    );
  }
}
