import { Inject, Injectable } from '@nestjs/common';
import { VEHICLE_PROVIDER_REPOSITORY } from '../../../constants';
import { VehicleProvider } from 'src/vehicle/entities/vehicle-provider.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VehicleProviderService {
    constructor(
        @Inject(VEHICLE_PROVIDER_REPOSITORY)
        private providerRepository: Repository<VehicleProvider>,
    ) {

    }

    async findByName(name: string): Promise<VehicleProvider> {
        return this.providerRepository.findOne({ name });
    }

    async insert(provider: VehicleProvider): Promise<void> {
        await this.providerRepository.insert(provider);
    }
}
