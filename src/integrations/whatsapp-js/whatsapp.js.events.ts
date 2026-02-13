import { Inject, Injectable } from '@nestjs/common'
import { Client } from 'whatsapp-web.js'
import { WhatsappJsService } from './whatsapp.js.service'

@Injectable()
export class WhatsappJsEvents {
  constructor(
    @Inject('WHATSAPP_JS_MODULE') private readonly whatsappModule: Client,
    @Inject(WhatsappJsService)
    private readonly whatsappJsService: WhatsappJsService,
  ) {
    this.init()
  }

  private async init() {
    await this.whatsappModule.initialize()
    await this.qrCode()
    await this.isAuthenticated()
    await this.isReady()
  }

  private async qrCode() {
    return new Promise<string>((resolve) => {
      this.whatsappModule.on('qr', (qr) => {
        this.whatsappJsService.saveQrCode(qr)
        resolve(qr)
      })
    })
  }

  private async isReady() {
    return new Promise<boolean>((resolve) => {
      this.whatsappModule.on('ready', () => {
        this.whatsappJsService.setIsReady(true)
        resolve(true)
      })
    })
  }

  private async isAuthenticated() {
    return new Promise<boolean>((resolve) => {
      this.whatsappModule.on('authenticated', () => {
        this.whatsappJsService.setIsAuthenticated(true)
        resolve(true)
      })
    })
  }
}
