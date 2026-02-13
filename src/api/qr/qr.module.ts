import { Module } from '@nestjs/common'
import { QrController } from './qr.controller'
import { QrService } from './qr.service'
import { WhatsappJsModule } from '@/integrations/whatsapp-js/whatsapp.js.module'
import { WhatsappJsService } from '@/integrations/whatsapp-js/whatsapp.js.service'

@Module({
  imports: [WhatsappJsModule],
  controllers: [QrController],
  providers: [QrService],
})
export class QrModule {}
