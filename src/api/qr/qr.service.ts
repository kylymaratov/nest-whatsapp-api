import { WhatsappJsService } from '@/integrations/whatsapp-js/whatsapp.js.service'
import { Injectable, NotFoundException } from '@nestjs/common'

@Injectable()
export class QrService {
  constructor(private readonly whatsappService: WhatsappJsService) {}

  async getQrCode() {
    const qrCode = await this.whatsappService.getSavedQrCode()

    if (!qrCode?.qrCode) throw new NotFoundException('QR code not found')

    return qrCode
  }
}
