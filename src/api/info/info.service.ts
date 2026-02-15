import { WhatsappJsService } from '@/integrations/whatsapp-js/whatsapp.js.service'
import { Injectable } from '@nestjs/common'

@Injectable()
export class InfoService {
  constructor(private readonly whatsappService: WhatsappJsService) {}

  async isReady() {
    return { isReady: this.whatsappService.getIsReady() }
  }

  async isAuthenticated() {
    return { isAuthenticated: this.whatsappService.getIsAuthenticated() }
  }
}
