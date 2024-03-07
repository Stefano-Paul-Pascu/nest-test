import { Test, TestingModule } from '@nestjs/testing';
import { RegioneController } from './regione.controller';

describe('RegioneController', () => {
  let controller: RegioneController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RegioneController],
    }).compile();

    controller = module.get<RegioneController>(RegioneController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
