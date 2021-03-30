import { Test, TestingModule } from '@nestjs/testing';
import { VehicleProviderService } from './vehicle-provider.service';

describe('VehicleProviderService', () => {
  let service: VehicleProviderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VehicleProviderService],
    }).compile();

    service = module.get<VehicleProviderService>(VehicleProviderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
