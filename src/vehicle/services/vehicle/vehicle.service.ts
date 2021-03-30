import { Inject, Injectable } from '@nestjs/common';
import { VEHICLE_REPOSITORY } from 'src/constants';
import { OperationResult } from 'src/shared/dto/operation-result.dto';
import { CsvService } from 'src/shared/services/csv.service';
import { Repository } from 'typeorm';
import { Vehicle } from '../../entities/vehicle.entity';
import { VehicleProviderService } from '../vehicle-provider/vehicle-provider.service';

@Injectable()
export class VehicleService {
  constructor(
    @Inject(VEHICLE_REPOSITORY)
    private vehicleRepository: Repository<Vehicle>,
    private providerService: VehicleProviderService,
    private csvService: CsvService,
  ) {
  }

  async importFromCsv(csv: string, providerName: string): Promise<OperationResult<Vehicle[]>> {

    try {
      const provider = await this.providerService.findByName(providerName);

      if (!provider) {
        return { success: false, message: `Invalid provider.`, data: null, };
      }

      const collection = await this.csvService.parse<Vehicle>(csv, provider.columns);

      await this.vehicleRepository.insert(collection);

      return { success: true, message: `Successfully imported ${collection.length} items.`, data: collection, };
    } catch (e) {
      // To do: Implement proper logging service
      console.error(e);
      return { success: false, message: 'Failed to import items.', data: null };;
    }
  }

  async findAll(): Promise<OperationResult<Vehicle[]>> {
    try {
      const vehicles = await this.vehicleRepository.find();
      return {
        success: true,
        data: vehicles,
        message: 'Vehicle collection fetched successully.'
      };
    } catch (e) {
      return {
        success: false,
        data: [],
        message: 'Error fetching vehicle collection.'
      };
    }
  }
}
