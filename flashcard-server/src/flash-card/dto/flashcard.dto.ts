import { IsNotEmpty, IsString } from 'class-validator';

export class FlashCardDto {
  @IsString()
  @IsNotEmpty()
  question: string;

  @IsString()
  @IsNotEmpty()
  answer: string;
}
