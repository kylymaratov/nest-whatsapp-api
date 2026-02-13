import { WhatsappJsService } from '@/integrations/whatsapp-js/whatsapp.js.service'
import { Injectable } from '@nestjs/common'
import { GetMessagesByChatIdDto } from './dto/getMessagesByChatId.dto'

@Injectable()
export class MesssageService {
  constructor(private readonly whatsappService: WhatsappJsService) {}

  async getMessagesByChatId(param: GetMessagesByChatIdDto) {
    const { chatId } = param

    const messages = await this.whatsappService.getChatMessagesById(chatId)

    return messages
  }
}
