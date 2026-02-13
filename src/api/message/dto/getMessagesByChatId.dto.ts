import { IsNotEmpty } from 'class-validator'

export class GetMessagesByChatIdDto {
  @IsNotEmpty()
  chatId: string
}
