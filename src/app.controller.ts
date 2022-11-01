import { Controller } from '@nestjs/common';
import { AppService } from './app.service';

/**
 * App Controller
 */
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
}
