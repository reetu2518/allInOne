import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, Length } from 'class-validator';
import { messages } from '../../common/constants/constant';

/**
 * Create CreateContact Dto
 */
export class CreateContactDto {
  id?: number;

  /**
   * Name of User
   */
  @ApiProperty({ description: 'Name' })
  @IsNotEmpty({ message: `Name ${messages.NOT_EMPTY}` })
  @Length(3, 20, { message: messages.LENGTH_LIMIT })
  @IsString({ message: `Name ${messages.MUST_STRING}` })
  fullName: string;

  /**
   * Email
   */
  @ApiProperty({ description: 'Email', required: true, uniqueItems: true })
  @IsNotEmpty({ message: `Email ${messages.NOT_EMPTY}` })
  @IsString({ message: `Email ${messages.MUST_STRING}` })
  emailId: string;

  /**
   * Descriptions
   */
  @ApiProperty({ description: 'Description' })
  @IsString({ message: `Description ${messages.MUST_STRING}` })
  description?: string;

  /**
   * Phone Number
   */
  @ApiProperty({ description: 'Phone number' })
  @IsNumber()
  phoneNumber: number;
}
