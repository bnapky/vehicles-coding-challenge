import { Test, TestingModule } from '@nestjs/testing';
import { CsvService } from '../../../shared/services/csv.service';
import { VEHICLE_REPOSITORY } from '../../../constants';
import { VehicleProviderService } from '../vehicle-provider/vehicle-provider.service';
import { VehicleService } from './vehicle.service';
import { Repository } from 'typeorm';
import { Vehicle } from 'src/vehicle/entities/vehicle.entity';


describe('VehicleService', () => {
  let service: VehicleService;
  let providerService: VehicleProviderService;
  let vehicleRepository: Repository<Vehicle>;
  let csvService: CsvService;

  const csvSample = 'UUID, VIN, MODEL\n 112233,vin-123,escape';
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        VehicleService,
        { provide: VehicleProviderService, useValue: { findByName: () => Promise.resolve({ name: '', columns: [] }) } },
        { provide: VEHICLE_REPOSITORY, useValue: { find: () => Promise.resolve(), insert: () => Promise.resolve() } },
        CsvService,
      ],
    }).compile();

    service = module.get<VehicleService>(VehicleService);
    providerService = module.get<VehicleProviderService>(VehicleProviderService);
    vehicleRepository = module.get<Repository<Vehicle>>(VEHICLE_REPOSITORY);
    csvService = module.get<CsvService>(CsvService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('importFromCsv should fail if provider is not found', async () => {
    // Arrange
    spyOn(providerService, 'findByName').and.returnValue(null);

    // Act
    const result = await service.importFromCsv(csvSample, '');

    // Assert
    expect(result.success).toBeFalsy();
  });

  it('importFromCsv should find provider by name', async () => {
    // Arrange
    const providerName = 'AlienTechnology';

    spyOn(providerService, 'findByName').and.callThrough();

    // Act
    await service.importFromCsv(csvSample, providerName);

    // Assert
    expect(providerService.findByName).toHaveBeenCalledWith(providerName);
  });

  it('importFromCsv should insert parsed items', async () => {
    // Arrange
    const providerName = 'AlienTechnology';
    const expectedItems: Vehicle[] = [{
      uuid: '',
      vin: '',
      model: '',
    }] as Vehicle[];

    spyOn(csvService, 'parse').and.returnValue(expectedItems);
    spyOn(vehicleRepository, 'insert').and.returnValue(expectedItems);

    // Act
    await service.importFromCsv(csvSample, providerName);

    // Assert
    expect(vehicleRepository.insert).toHaveBeenCalledWith(expectedItems);
  });

  it('importFromCsv should return correct operation result in case of exception', async () => {
    // Arrange
    const providerName = 'AlienTechnology';
    console.error = () => {};
    spyOn(vehicleRepository, 'insert').and.throwError('');

    // Act
    const result = await service.importFromCsv(csvSample, providerName);

    // Assert
    expect(result.success).toBeFalsy();
  });
});
