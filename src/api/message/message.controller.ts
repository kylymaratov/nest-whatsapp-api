import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common'
import { MesssageService } from './message.service'
import { GetMessagesByChatIdDto } from './dto/getMessagesByChatId.dto'
import { SendMessageDto } from './dto/sendMessage.dto'
import { SendMediaDto } from './dto/sendMedia.dto'

@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MesssageService) {}

  @Get('messages/:chatId')
  getMessagesByChatId(@Param() param: GetMessagesByChatIdDto) {
    return this.messageService.getMessagesByChatId(param)
  }

  @Post('send')
  sendMessage(@Body() body: SendMessageDto) {
    return this.messageService.sendMessage(body)
  }

  @Post('send-media')
  sendMedia(@Body() body: SendMediaDto) {
    return this.messageService.sendMedia(body)
  }
}
