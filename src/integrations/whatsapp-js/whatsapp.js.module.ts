import { Inject, Module } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { WhatsappJsEvents } from './whatsapp.js.events'
import { WhatsappJsService } from './whatsapp.js.service'

@Module({
  providers: [
    {
      provide: 'WHATSAPP_JS_MODULE',
      useFactory: async (config: ConfigService) => {
        const { Client } = await import('whatsapp-web.js')

        return new Client({
          puppeteer: {
            headless: config.get<boolean>('whatsapp.headless') ?? true,
            args: config.get<string[]>('whatsapp.args') || [],
          },
        })
      },
      inject: [ConfigService],
    },
    WhatsappJsEvents,
    WhatsappJsService,
  ],
  exports: [WhatsappJsService],
})
export class WhatsappJsModule {}
