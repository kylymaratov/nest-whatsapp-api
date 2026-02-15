import { Controller, Get, Param } from '@nestjs/common'
import { ChatService } from './chat.service'
import { GetChatByIdDto } from './dto/getChatById.dto'

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Get('chats')
  getChats() {
    return this.chatService.getChats()
  }

  @Get(':chatId')
  getChatById(@Param() query: GetChatByIdDto) {
    return this.chatService.getChatById(query)
  }
}
