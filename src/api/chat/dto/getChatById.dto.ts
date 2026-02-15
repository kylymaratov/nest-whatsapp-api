import { IsNotEmpty } from 'class-validator'

export class GetChatByIdDto {
  @IsNotEmpty()
  chatId: string
}
