import { Controller, Get } from '@nestjs/common'
import { InfoService } from './info.service'

@Controller('info')
export class InfoController {
  constructor(private readonly infoService: InfoService) {}

  @Get('is-ready')
  isReady() {
    return this.infoService.isReady()
  }

  @Get('is-authenticated')
  isAuthenticated() {
    return this.infoService.isAuthenticated()
  }
}
