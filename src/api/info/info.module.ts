import { Module } from '@nestjs/common'
import { InfoController } from './info.controller'
import { InfoService } from './info.service'
import { WhatsappJsModule } from '@/integrations/whatsapp-js/whatsapp.js.module'

@Module({
  imports: [WhatsappJsModule],
  controllers: [InfoController],
  providers: [InfoService],
})
export class InfoModule {}
