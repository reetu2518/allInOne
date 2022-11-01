import { JwtService } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import { messages } from '../common/constants/constant';
import {
  APPROVE_ENUM,
  DELETE_ENUM,
  GENDER,
  STATUS_ENUM,
} from '../common/enum/common.enum';
import { UserRepository } from './user.repositry';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

let userInput = {
  id: 1,
  fullName: 'Ram',
  emailId: 'ram@mail.com',
  password: '123',
  phoneNumber: 887654321,
  gender: GENDER.FEMALE,
  status: STATUS_ENUM.ACTIVE,
  isDelete: DELETE_ENUM.NO,
  isApproved: APPROVE_ENUM.APPROVED,
  createdOn: new Date(),
  updatedOn: new Date(),
  profile: {
    id: 1,
    alternateMobile: 6786786,
    post: 'Technician',
    aadharCard: 'yes',
    aadharCardNumber: 8786786,
    panCard: 'yes',
    panCardNumber: 234234234,
    expereicneLetter: 'yes',
    expereicne: 2,
    image: 'NA',
    area: 'Panki',
    pincode: 208025,
    address: 'CSJM',
    landmark: 'KPIC',
    city: 'KNP',
    skills: 'PHP',
    about: 'I have 2 year of exp.',
    state: 'U.P.',
    country: 'India',
    createdAt: new Date(),
    updatedAt: new Date(), user :{id: 1,
      fullName: 'Ram',
      emailId: 'ram@mail.com',
      password: '123',
      phoneNumber: 887654321,
      gender: GENDER.FEMALE,
      status: STATUS_ENUM.ACTIVE,
      isDelete: DELETE_ENUM.NO,
      isApproved: APPROVE_ENUM.APPROVED,
      createdOn: new Date(),
      updatedOn: new Date()}
  },
};
let userLogin = {
  "emailId": "ram@mail.com",
  "password": "123"
}
describe('UsersuserController', () => {
  let userController: UsersController;
  let userService: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        UsersService,
        {
          provide: UserRepository,
          useFactory: async () => ({
            create: jest.fn(() => []),
            login: jest.fn(() => []),
            userDetail: jest.fn(() => []),
          }),
        },
        {
          provide: JwtService,
          useFactory: async () => ({
            signAsync: jest.fn(() => []),
          }),
        },
      ],
    }).compile();

    userController = module.get<UsersController>(UsersController);
    userService = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(userController).toBeDefined();
  });

  describe('When userCreate', () => {
    it('should be defined', async () => {
      const msg =  {message: messages.REGISTER_SUCCESS };
      const userSpy = jest
        .spyOn(userService, 'create')
        .mockResolvedValue(msg);
      const res = await userController.create(userInput);
      expect(res).toEqual(msg);
      expect(userSpy).toHaveBeenCalled();
      expect(userSpy).toHaveBeenCalledTimes(1);
    });
  });
  
  describe('When userLogin', () => {
    it('should be defined', async () => {
      const token = "adas";
      const userLoginSpy = jest.spyOn(userService, 'login').mockResolvedValue(token);
      const res = await userController.login(userLogin);
      expect(res).toEqual(token);
      expect(userLoginSpy).toHaveBeenCalled();
      expect(userLoginSpy).toHaveBeenCalledTimes(1);
    });
  });
  
  
  describe('When userDetail(1)', () => {
    it('should be defined', async () => {
      const userDetailSpy = jest.spyOn(userService, 'userDetail').mockResolvedValue([userInput]);
      const res = await userController.userDetail(1);
      expect(res).toEqual([userInput]);
      expect(userDetailSpy).toHaveBeenCalled();
      expect(userDetailSpy).toHaveBeenCalledTimes(1);
      expect(userDetailSpy).toHaveBeenCalledWith(1);
    });
  });
});
