import { IsNotEmpty, IsOptional } from 'class-validator'

export class SendMediaDto {
  @IsNotEmpty()
  to: string

  @IsNotEmpty()
  media: any

  @IsOptional()
  caption?: string
}
