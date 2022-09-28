import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Profile } from './entities/profile.entity';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports:[
    TypeOrmModule.forFeature([User, Profile])
  ]
})
export class UsersModule {}
