import { Module } from '@nestjs/common';
import { ContactService } from './contact.service';
import { ContactController } from './contact.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contact } from './entities/contact.entity';

/**
 * Contact Module
 */
@Module({
  controllers: [ContactController],
  providers: [ContactService],
  imports:[TypeOrmModule.forFeature([Contact])]
})
export class ContactModule {}
