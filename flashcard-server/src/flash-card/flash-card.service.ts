import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { FlashCardDto } from './dto/flashcard.dto';

@Injectable()
export class FlashCardService {
  constructor(private prisma: PrismaService) {}

  async getFlashcards(email: { [key: string]: string }) {
    const flashCards = await this.prisma.flashCard.findMany({
      where: {
        createdBy: email.email,
      },
    });
    if (!flashCards) {
      return [];
    }
    return flashCards;
  }

  async createFlashcard(data: { email: string; dto: FlashCardDto }) {
    const flashCard = await this.prisma.flashCard.create({
      data: {
        ...data.dto,
        createdBy: data.email,
      },
    });

    if (!flashCard) {
      throw new Error('Creation Failed');
    }

    return flashCard.id;
  }

  async deleteFlashcard(data: { email: string; id: string }) {
    await this.prisma.flashCard.delete({
      where: {
        id: data.id,
        createdBy: data.email,
      },
    });

    return 'Success';
  }

  async updateFlashcard(data: {
    email: string;
    id: string;
    dto: FlashCardDto;
  }) {
    await this.prisma.flashCard.update({
      where: {
        id: data.id,
        createdBy: data.email,
      },
      data: {
        ...data.dto,
      },
    });

    return 'Success';
  }
}
