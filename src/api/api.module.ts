import { Module } from '@nestjs/common'
import { ChatModule } from './chat/chat.module'
import { MessageModule } from './message/message.module'
import { UserModule } from './user/user.module'
import { QrModule } from './qr/qr.module'
import { InfoModule } from './info/info.module'

@Module({
  imports: [ChatModule, MessageModule, UserModule, QrModule, InfoModule],
})
export class ApiModule {}
