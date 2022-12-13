import { Body, Controller, Get, Post } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { AppService } from './app.service';
import { CreateNotificationBody } from './create-notification-body';
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
  create(@Body() body: CreateNotificationBody) {
    console.log(body);
    const { recipientId, content, category } = body;

    return this.prisma.notification.create({
      data: {
        content,
        category,
        recipientId,
        id: randomUUID(),
      },
    });
  }
}
