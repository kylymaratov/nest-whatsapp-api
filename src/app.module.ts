import { Module } from '@nestjs/common'
import { ApiModule } from './api/api.module'
import { ConfigModule } from '@nestjs/config'
import globalConfig from './common/config/global.config'
import whatsappJsConfig from './common/config/whatsapp.js.config'
import { WhatsappJsModule } from './integrations/whatsapp-js/whatsapp.js.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [globalConfig, whatsappJsConfig],
    }),
    ApiModule,
    WhatsappJsModule,
  ],
})
export class AppModule {}
