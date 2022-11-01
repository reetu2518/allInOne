import { JwtService } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { messages } from '../common/constants/constant';
import { ContactController } from './contact.controller';
import { ContactService } from './contact.service';
import { Contact } from './entities/contact.entity';

let mockInput = {
  "fullName": "Ram",
  "emailId": "ram@mail.com",
  "description": "description",
  "phoneNumber": 887654321
};

describe('ContactController', () => {
  let contactController: ContactController;
  let contactService: ContactService;
  let contactRepo : Repository<Contact>;
  const CONTACT_REPOSITORY_TOKEN = getRepositoryToken(Contact);

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContactController],
      providers: [
        ContactService,
        {
          provide: CONTACT_REPOSITORY_TOKEN,
          useFactory: async () => ({
            create: jest.fn(() => []),
            findAll: jest.fn(() => []),
            remove: jest.fn(() => []),
          }),
        },
      ],
    }).compile();

    contactController = module.get<ContactController>(ContactController);
    contactService = module.get<ContactService>(ContactService);
  });

  it('should be defined', () => {
    expect(contactController).toBeDefined();
  });

  describe('When contactCreate', () => {
    it('should be defined', async () => {
      const msg =  {message:`Contact ${messages.SUBMIT_SUCCESS}`}
      const createSpy = jest
        .spyOn(contactService, 'create')
        .mockResolvedValue(msg);
      const res = await contactController.create(mockInput);
      expect(res).toEqual(msg);
      expect(createSpy).toHaveBeenCalled();
      expect(createSpy).toHaveBeenCalledTimes(1);
    });
  });
  
  describe('When allRecord()', () => {
    it('should be defined', async () => {
      const allRecordSpy = jest.spyOn(contactService, 'findAll').mockResolvedValue([mockInput]);
      const res = await contactController.findAll();
      expect(res).toEqual([mockInput]);
      expect(allRecordSpy).toHaveBeenCalled();
      expect(allRecordSpy).toHaveBeenCalledTimes(1);
    });
  });
  
  
  describe('When remove(1)', () => {
    it('should be defined', async () => {
      const msg = {message:`Contact ${messages.DELETE_SUCCESS}`};
      const deleteSpy = jest.spyOn(contactService, 'remove').mockResolvedValue(msg);
      const res = await contactController.remove(1);
      expect(res).toEqual(msg);
      expect(deleteSpy).toHaveBeenCalled();
      expect(deleteSpy).toHaveBeenCalledTimes(1);
      expect(deleteSpy).toHaveBeenCalledWith(1);
    });
  });
});
