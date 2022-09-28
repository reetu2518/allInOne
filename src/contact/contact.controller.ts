import { Controller, Get, Post, Body, Param, Delete, UsePipes, ValidationPipe, UseInterceptors, HttpStatus } from '@nestjs/common';
import { ApiInternalServerErrorResponse, ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { messages } from '../common/constants/constant';
import { ResponseInterceptor } from '../common/interceptor/response-interceptors.interceptors';
import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/create-contact.dto';

/**
 * Contact Controller
 */
@UsePipes(ValidationPipe)
@UseInterceptors(ResponseInterceptor)
@ApiTags("Contact")
@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  /**
   * New Row Insterted in DB
   * @param createContactDto -Contact Details
   * @returns - Success Message
   * @throw - InternalServerError
   */
  @ApiOkResponse({ status: HttpStatus.OK, description: messages.FETCH_SUCCESS })
  @ApiInternalServerErrorResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: messages.INTERNAL_ERROR })
  @Post()
  async create(@Body() createContactDto: CreateContactDto):Promise<Object> {
    return await this.contactService.create(createContactDto);
  }


  /**
   * All Contact Rows
   * @returns - Contact Reocrds
   * @throw - InternalServerError, NotFoundException
   */
  @ApiOkResponse({ status: HttpStatus.OK, description: messages.FETCH_SUCCESS })
  @ApiInternalServerErrorResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: messages.INTERNAL_ERROR })
  @Get()
  async findAll():Promise<CreateContactDto[]> {
    return await this.contactService.findAll();
  }


  /**
   * Contact Delete
   * @returns - Delete Affect Rows
   * @throw - InternalServerError, NotFoundException
   */
  @ApiOkResponse({ status: HttpStatus.OK, description: messages.FETCH_SUCCESS })
  @ApiNotFoundResponse({ status: HttpStatus.NOT_FOUND, description: messages.NOT_FOUND })
  @ApiInternalServerErrorResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: messages.INTERNAL_ERROR })
  @Delete(':id')
  remove(@Param('id') id: string):Promise<Object>{
    return this.contactService.remove(+id);
  }
}
