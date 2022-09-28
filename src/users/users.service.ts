import { ConflictException, HttpException, HttpStatus, Injectable, InternalServerErrorException, Logger, NotAcceptableException, NotFoundException, NotImplementedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from "bcryptjs";
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { messages } from '../common/constants/constant';
import { UserLoginDto } from './dto/login.dto';
import { JwtPayload } from './jwt-payload';

/**
 * User Service
 */
@Injectable()
export class UsersService {
 
  logger = new Logger(UsersService.name);

  constructor(
    // @Inject(User) private userRepo : Repository<User>,
    private jwtService: JwtService,
    @InjectRepository(User) private userRepo : Repository<User>
  ) {}

  /**
   * User Inserted in DB
   * @param createUserDto 
   * @returns 
   * @throw - Errors : ConflictException, InternalServerErrorException
   */
  async create(createUserDto: CreateUserDto): Promise<Object> {
    try {
      const salt = await bcrypt.genSalt();
      const hash = await bcrypt.hash(createUserDto.password, salt);
      createUserDto.password = hash;

      const res = await this.userRepo.save(createUserDto);
      this.logger.log("User Created Sucessfully");
      return { message: messages.REGISTER_SUCCESS };
    } catch (error) {
      if (error.code == '23505') {
        throw new ConflictException({ status: HttpStatus.CONFLICT, message: `User ${messages.ALREADY_EXIST}` });
      } else {
        throw new InternalServerErrorException({ status: HttpStatus.INTERNAL_SERVER_ERROR, message: messages.INTERNAL_ERROR });
      }
    }
  }

  /**
  * Login User
  * @param loginDto - User email, password
  * @returns Token
  * @throw - Error handle : NotFoundException, InternalServerErrorException, NotAcceptableException
  */
  async login(loginDto: UserLoginDto) {
    try {
      const res = await this.userRepo.findOneBy({ emailId: loginDto.emailId });
      if (res?.id == null) {
        throw new HttpException(`User ${messages.RECORD_NOT_FOUND}`, HttpStatus.NOT_FOUND);
      } else {
        let passwordCompare = await bcrypt.compare(loginDto.password, res.password);
        if (!passwordCompare) { throw new NotAcceptableException(messages.INVALID_USER); }

        this.logger.warn(`User Login Sucessfully with email: ${res.emailId}`);
        const jwtPayload: JwtPayload = { emailId: loginDto.emailId };
        let token = await this.jwtService.signAsync(jwtPayload);
        return token;
      }
    } catch (error) {
      if (error?.message == `User ${messages.RECORD_NOT_FOUND}`) {
        throw new NotFoundException({ status: HttpStatus.NOT_FOUND, message: `User ${messages.RECORD_NOT_FOUND}` });
      } else if (error?.message == messages.INVALID_USER) {
        throw new NotAcceptableException(messages.INVALID_USER)
      } else {
        throw new InternalServerErrorException({ status: HttpStatus.INTERNAL_SERVER_ERROR, message: messages.INTERNAL_ERROR });
      }
    }
  }
 
  /**
   * User Details fetch from user table on the basis of Id
   * @param id - User Id
   * @returns 0 User Details
   */
  async userDetail(id:number): Promise<CreateUserDto[]> {
    try {
      const res = await this.userRepo.findBy({id});
      if (res.length == 0) {
        throw new NotFoundException({status:HttpStatus.NOT_FOUND, message:`User ${messages.RECORD_NOT_FOUND}`});
      } else {
        return res;
      }
    } catch (error) {
      if (error?.message == `User ${messages.RECORD_NOT_FOUND}`) {
        throw new NotFoundException({ status: HttpStatus.NOT_FOUND, message: `User ${messages.RECORD_NOT_FOUND}` });
      } else {
        throw new InternalServerErrorException({status:HttpStatus.INTERNAL_SERVER_ERROR, message:messages.INTERNAL_ERROR});
      }
    }
  }

}