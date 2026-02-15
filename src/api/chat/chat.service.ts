import { WhatsappJsService } from '@/integrations/whatsapp-js/whatsapp.js.service'
import { Injectable, NotFoundException } from '@nestjs/common'
import { GetChatByIdDto } from './dto/getChatById.dto'

@Injectable()
export class ChatService {
  constructor(private readonly whatsappService: WhatsappJsService) {}

  async getChats() {
    const chats = await this.whatsappService.getChats()

    if (!chats.length) throw new NotFoundException('No chats found')

    return chats
  }

  async getChatById(query: GetChatByIdDto) {
    const { chatId } = query

    const chat = await this.whatsappService.getChatById(chatId)

    if (!chat) throw new NotFoundException('Chat not found')

    return chat
  }
}
