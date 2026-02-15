import { WhatsappJsService } from '@/integrations/whatsapp-js/whatsapp.js.service'
import { Injectable } from '@nestjs/common'
import { GetMessagesByChatIdDto } from './dto/getMessagesByChatId.dto'
import { SendMessageDto } from './dto/sendMessage.dto'
import { SendMediaDto } from './dto/sendMedia.dto'

@Injectable()
export class MesssageService {
  constructor(private readonly whatsappService: WhatsappJsService) {}

  async getMessagesByChatId(param: GetMessagesByChatIdDto) {
    const { chatId } = param

    const messages = await this.whatsappService.getChatMessagesById(chatId)

    return messages
  }

  async sendMessage(body: SendMessageDto) {
    const { to, message } = body

    const sentMessage = await this.whatsappService.sendMessage(to, message)

    return { success: true, sentMessage }
  }

  async sendMedia(body: SendMediaDto) {
    const { to, media, caption } = body

    const sentMedia = await this.whatsappService.sendMedia(to, media, caption)

    return { success: true, sentMedia }
  }
}
