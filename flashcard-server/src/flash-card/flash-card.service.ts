import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FlashCardService {
  constructor(private prisma: PrismaService) {}

  getFlashcards(email: { [key: string]: string }) {
    return `All flashcards have been returned for ${email.email}`;
  }
}
