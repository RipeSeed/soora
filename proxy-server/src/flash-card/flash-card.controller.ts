import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { FlashCardService } from './flash-card.service';
import { GetCurrentUser } from 'src/common/decorators';
import { FlashCardDto } from './dto';

@Controller('flash-card')
export class FlashCardController {
  constructor(private flashCardService: FlashCardService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  getFlashCards(@GetCurrentUser('email') email: string) {
    return this.flashCardService.getFlashCards(email);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  createFlashCard(
    @GetCurrentUser('email') email: string,
    @Body() dto: FlashCardDto,
  ) {
    return this.flashCardService.create(email, dto);
  }
}
