import { Controller, Get, Post } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';

@Controller('notifications')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly prisma: PrismaService,
  ) {}

  @Get()
  getHello() {
    return this.prisma.notification.findMany();
  }

  @Post()
  create() {
    return this.prisma.notification.create({
      data: {
        category: 'category',
        content: 'content',
        recipientId: 'Zachery',
        id: randomUUID(),
      },
    });
  }
}
