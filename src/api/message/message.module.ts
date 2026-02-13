import { Module } from '@nestjs/common'
import { MessageController } from './message.controller'
import { MesssageService } from './message.service'
import { WhatsappJsModule } from '@/integrations/whatsapp-js/whatsapp.js.module'

@Module({
  imports: [WhatsappJsModule],
  controllers: [MessageController],
  providers: [MesssageService],
})
export class MessageModule {}
