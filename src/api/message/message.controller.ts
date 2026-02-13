import { Controller, Get, Param, Query } from '@nestjs/common'
import { MesssageService } from './message.service'
import { GetMessagesByChatIdDto } from './dto/getMessagesByChatId.dto'

@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MesssageService) {}

  @Get('messages/:chatId')
  getMessagesByChatId(@Param() param: GetMessagesByChatIdDto) {
    return this.messageService.getMessagesByChatId(param)
  }
}
