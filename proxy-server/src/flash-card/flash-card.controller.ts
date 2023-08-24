import { Controller, Get, Post } from '@nestjs/common';
import { FlashCardService } from './flash-card.service';
import { GetCurrentUser, Public } from 'src/common/decorators';

@Controller('flash-card')
export class FlashCardController {
  constructor(private flashCardService: FlashCardService) {}

  @Get()
  getFlashCards(@GetCurrentUser('email') email: string) {
    return this.flashCardService.getFlashCards(email);
  }
}
