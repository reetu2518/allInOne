import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, Length } from "class-validator";
import { messages } from "../../common/constants/constant";

/**
 * User Login Schema
 */
export class UserLoginDto{
    /**
     * Email
     */
    @ApiProperty({description:"Email Description", required:true})
    @IsNotEmpty({message:`Email ${messages.NOT_EMPTY}`})
    @Length(3, 20, {message:messages.LENGTH_LIMIT})
    @IsString()
    emailId:string;
   
    /**
     * Password
     */
    @ApiProperty({description:"Password Description", required:true})
    @IsNotEmpty({message:`Password ${messages.NOT_EMPTY}`})
    @Length(3, 20, {message:messages.LENGTH_LIMIT})
    password:string;
}