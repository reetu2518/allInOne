import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, UseInterceptors, ValidationPipe, HttpStatus, UseGuards } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiInternalServerErrorResponse, ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { messages } from '../common/constants/constant';
import { UserLoginDto } from './dto/login.dto';

/**
 * User Controller
 */
// @UseFilters(HttpExceptionFilter)
@UsePipes(ValidationPipe)
// @UseInterceptors(ResponseInterceptor)
@ApiTags("User")
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  /**
   * User Registration
   * @param createUserDto - User Details
   * @returns - Message : Uesr Created Success
   */
  @Post('/register')
  create(@Body() createUserDto: CreateUserDto): Promise<Object> {
    return this.usersService.create(createUserDto);
  }

  /**
   * User Login
   * @param - Email, password
   * @returns - token
   */
  @ApiOkResponse({ status: HttpStatus.OK, description: messages.FETCH_SUCCESS })
  @ApiNotFoundResponse({ status: HttpStatus.NOT_FOUND, description: messages.NOT_FOUND })
  @ApiInternalServerErrorResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: messages.INTERNAL_ERROR })
  @Post('/login')
  async login(@Body(ValidationPipe) loginDto: UserLoginDto): Promise<String> {
    return "sdfs";
    // return await this.usersService.login(loginDto);
  }

  /**
   * User Summary
   * @param - id
   * @returns - User Details
   */
  // @UseGuards(JwtAuthGaud)
  @ApiOkResponse({ status: HttpStatus.OK, description: messages.FETCH_SUCCESS })
  @ApiNotFoundResponse({ status: HttpStatus.NOT_FOUND, description: messages.NOT_FOUND })
  @ApiInternalServerErrorResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: messages.INTERNAL_ERROR })
  @Get('/:id')
  async userDetail(@Param('id') id: number) {
    // return await this.usersService.userDetail(id);
  }


  // @Get()
  // findAll() {
  //   return this.usersService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.usersService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.usersService.update(+id, updateUserDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.usersService.remove(+id);
  // }
}