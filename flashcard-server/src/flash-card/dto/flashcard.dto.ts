import { IsString } from 'class-validator';

export class FlashCardDto {
  @IsString()
  id: string;

  @IsString()
  question: string;

  @IsString()
  answer: string;

  @IsString()
  createdBy: string;
}
