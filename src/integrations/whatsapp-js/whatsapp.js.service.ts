import { Inject, Injectable, Logger } from '@nestjs/common'
import fs from 'fs/promises'
import { Client } from 'whatsapp-web.js'

@Injectable()
export class WhatsappJsService {
  private readonly logger = new Logger('WhatsappJsService')
  private isAuthenticated = false
  private isReady = false

  constructor(
    @Inject('WHATSAPP_JS_MODULE') private readonly whatsappModule: Client,
  ) {}

  setIsAuthenticated(value: boolean) {
    this.isAuthenticated = value
  }

  setIsReady(value: boolean) {
    console.log(value)
    this.isReady = value
  }

  getIsAuthenticated() {
    return this.isAuthenticated
  }

  getIsReady() {
    return this.isReady
  }

  async saveQrCode(qr: string) {
    try {
      await fs.writeFile(process.cwd() + '/qr-code.txt', qr)
    } catch (error) {
      this.logger.error('Error saving QR code:', error)
    }
  }

  async getSavedQrCode(): Promise<{
    qrCode: string
    updatedAt: string
  } | null> {
    try {
      const qrCode = await fs.readFile(process.cwd() + '/qr-code.txt', 'utf-8')
      const stat = await fs.stat(process.cwd() + '/qr-code.txt')

      return {
        qrCode,
        updatedAt: stat.mtime.toISOString(),
      }
    } catch (error) {
      this.logger.error('Error reading QR code:', error)
      return null
    }
  }

  async getChatMessagesById(chatId: string) {
    const chat = await this.getChatById(chatId)

    if (!chat) {
      this.logger.warn(`Chat with ID ${chatId} not found`)
      return []
    }

    return await chat.fetchMessages({ limit: 50 })
  }

  async sendMessage(to: string, message: string) {
    return await this.whatsappModule.sendMessage(to, message)
  }

  async sendMedia(to: string, media: any, caption?: string) {
    return await this.whatsappModule.sendMessage(to, media, { caption })
  }

  async getChats() {
    return await this.whatsappModule.getChats()
  }

  async getChatById(id: string) {
    return await this.whatsappModule.getChatById(id)
  }

  async getContacts() {
    return this.whatsappModule.getContacts()
  }
}
