import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
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

  @Delete()
  deleteFlashCard(
    @GetCurrentUser('email') email: string,
    // @Param('id') id: string,
    @Query() query: any,
  ) {
    console.log(query);
    return this.flashCardService.deleteFlashCard(email, query.id);
  }

  @Patch()
  updateFlashCard(
    @GetCurrentUser('email') email: string,
    @Query() query: any,
    @Body() dto: FlashCardDto,
  ) {
    return this.flashCardService.update(email, query.id, dto);
  }
}
