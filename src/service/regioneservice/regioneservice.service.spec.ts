import { Test, TestingModule } from '@nestjs/testing';
import { RegioneserviceService } from './regioneservice.service';

describe('RegioneserviceService', () => {
  let service: RegioneserviceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RegioneserviceService],
    }).compile();

    service = module.get<RegioneserviceService>(RegioneserviceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
