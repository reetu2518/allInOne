import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { messages } from '../common/constants/constant';
import { Repository } from 'typeorm';
import { CreateContactDto } from './dto/create-contact.dto';
import { Contact } from './entities/contact.entity';

/**
 * Contact Service
 */
@Injectable()
export class ContactService {
  constructor(@InjectRepository(Contact) private contactRepo:Repository<Contact>){}

  /**
   * New Row Insterted in DB
   * @param createContactDto -Contact Details
   * @returns - Success Message
   * @throw - InternalServerError
   */
  async create(createContactDto: CreateContactDto):Promise<Object> {
    const res = await this.contactRepo.save(createContactDto);
    if (res) {
      return {message:`Contact ${messages.SUBMIT_SUCCESS}`}
    }
  }

  /**
   * All Contact Rows
   * @returns - Contact Reocrds
   * @throw - InternalServerError, NotFoundException
   */
  async findAll():Promise<CreateContactDto[]> {
    const res = await this.contactRepo.find();
    if (!res) {
      throw new NotFoundException({ status: HttpStatus.NOT_FOUND, message: `Contact ${messages.RECORD_NOT_FOUND}` });
    }
    return res;
  }

  /**
   * Contact Delete
   * @returns - Delete Affect Rows
   * @throw - InternalServerError, NotFoundException
   */
  async remove(id: number):Promise<Object> {
    const res = await this.contactRepo.delete({id});
    if (res?.affected > 0) {
      return {message:`Contact ${messages.DELETE_SUCCESS}`}
    } else {
      throw new NotFoundException({ status: HttpStatus.NOT_FOUND, message: `Contact ${messages.RECORD_NOT_FOUND}` });
    }
  }
}
