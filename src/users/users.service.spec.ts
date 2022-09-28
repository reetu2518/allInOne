import { JwtService } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

let user = {
  id: 1,
  "fullName": "Akash",
  "emailId": "ak@gmail.com",
  "password": "122",
  "panCard": "BMTPSDF1233", createdOn: new Date(),
  updatedOn: new Date()
};


describe('UsersService', () => {
  let userService: UsersService;
  let userRepo : Repository<User>;
  const USER_REPOSITORY_TOKEN = getRepositoryToken(User);

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService,
      {
        provide: USER_REPOSITORY_TOKEN,
        useFactory : ()=>({
          findOneBy: jest.fn(()=>[]),
          save: jest.fn(()=>[]),
          getUserSummary: jest.fn(()=>[])
        })
      },
      {
        provide: JwtService,
        useFactory : ()=>({
          signAsync: jest.fn(()=>[])
        })
      },
      ],
    }).compile();

    userService = module.get<UsersService>(UsersService);
    userRepo = module.get<Repository<User>>(USER_REPOSITORY_TOKEN);
  });

  it('should be defined', () => {
    expect(userService).toBeDefined();
  });


  describe("When user login()", ()=>{
    describe("When it is success", ()=>{
      let loginSpy, res;
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6I";

      beforeEach(async()=>{
        // loginSpy = jest.spyOn(userRepo, 'findOneBy').mockResolvedValue(user);
        res = await userService.login(user);
      })

      // it("should return data", ()=>{
      //   expect(res).toEqual(token);
      //   expect(loginSpy).toHaveBeenCalled();
      //   expect(loginSpy).toHaveBeenCalledWith();
      //   expect(loginSpy).toHaveBeenCalledTimes(1);
      // })
    })
  })
});
