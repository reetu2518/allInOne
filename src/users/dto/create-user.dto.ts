import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString, Length } from "class-validator";
import { APPROVE_ENUM, DELETE_ENUM, GENDER, ROLE_ENUM, STATUS_ENUM } from "../../common/enum/common.enum";
import { messages } from "../../common/constants/constant";
import { Profile } from "../entities/profile.entity";

/**
 * Create User Dto
 */
export class CreateUserDto {
   
    id?:number;

    /**
     * Name of User
     */
    @ApiProperty({ description: "User name" })
    @IsNotEmpty({ message: `Name ${messages.NOT_EMPTY}` })
    @Length(3, 20, { message: messages.LENGTH_LIMIT })
    @IsString({ message: `Name ${messages.MUST_STRING}` })
    fullName: string;


    /**
     * Email
     */
    @ApiProperty({ description: "Email", required: true, uniqueItems: true })
    @IsNotEmpty({ message: `User Email ${messages.NOT_EMPTY}` })
    @IsString({ message: `Email ${messages.MUST_STRING}` })
    emailId: string;

    /**
     * Password
     */
    @ApiProperty({ description: "User password" })
    @IsNotEmpty({ message: `User Password ${messages.NOT_EMPTY}` })
    @IsString({ message: `Password ${messages.MUST_STRING}` })
    password?: string;


    
    /**
     * Phone Number
     */
    @ApiProperty({ description: 'Phone number' })
    @IsNumber()
    phoneNumber: number;

    /**
     * Gender
     */
    @ApiProperty({
        name: 'gender',
        type: 'enum',
        enum: [GENDER.MALE, GENDER.FEMALE],
        default: GENDER.MALE,
    })
    gender: GENDER;

    /**
     * Role
     */
    @ApiProperty({
        name: 'role',
        type: 'enum',
        enum: [ROLE_ENUM.TECHNICIAN, ROLE_ENUM.ADMIN, ROLE_ENUM.USER],
        default: ROLE_ENUM.USER,
    })
    role?: ROLE_ENUM;

    /**
     * Status
     */
    @ApiProperty({ name: 'status', default: 1, enum: [0, 1] })
    status: STATUS_ENUM;

    /**
     * Is Delete
     */
    @ApiProperty({
        type: 'enum',
        name: 'is_delete',
        enum: [DELETE_ENUM.NO, DELETE_ENUM.YES],
        default: DELETE_ENUM.NO,
    })
    isDelete: DELETE_ENUM;

    /**
     * Approved
     */
    @ApiProperty({
        type: 'enum',
        name: 'is_approved',
        enum: [APPROVE_ENUM.APPROVED, APPROVE_ENUM.PENDING, APPROVE_ENUM.REJECTED],
        default: APPROVE_ENUM.PENDING,
    })
    isApproved: APPROVE_ENUM;

    /**
     * Relation with Profile Table
     */
    @ApiProperty({description:"Profile Details"})
    profile?: Profile;
}