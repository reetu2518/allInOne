import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Profile } from './entities/profile.entity';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserRepository } from './user.repositry';
import { JwtStrategy } from './jwt.strategy';

@Module({
  controllers: [UsersController],
  providers: [UsersService,  UserRepository, JwtStrategy],
  imports:[
    TypeOrmModule.forFeature([User, Profile]),
    PassportModule.register({defaultStrategy:'jwt'}),
    JwtModule.registerAsync({
      useFactory:async()=>({
        secret: process.env.SECRET_KEY,
        signOptions:{
          expiresIn:'1d'
        }
      })
    })
  ]
})
export class UsersModule {}
