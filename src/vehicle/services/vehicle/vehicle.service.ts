import { Inject, Injectable } from '@nestjs/common';
import { VEHICLE_REPOSITORY } from 'src/constants';
import { OperationResult } from 'src/vehicle/dto/operation-result';
import { Repository } from 'typeorm';
import { Vehicle } from '../../entities/vehicle.entity';
import { VehicleProviderService } from '../vehicle-provider/vehicle-provider.service';

@Injectable()
export class VehicleService {
  constructor(
    @Inject(VEHICLE_REPOSITORY)
    private vehicleRepository: Repository<Vehicle>,
    private providerService: VehicleProviderService,
  ) {
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
