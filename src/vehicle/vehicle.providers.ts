import { DATABASE_PROVIDER_TOKEN, VEHICLE_PROVIDER_REPOSITORY, VEHICLE_REPOSITORY } from 'src/constants';
import { Connection } from 'typeorm';
import { VehicleProvider } from './entities/vehicle-provider.entity';
import { Vehicle } from './entities/vehicle.entity';

export const vehicleProviders = [
    {
        provide: VEHICLE_REPOSITORY,
        useFactory: (connection: Connection) => connection.getRepository(Vehicle),
        inject: [DATABASE_PROVIDER_TOKEN],
    },
    {
        provide: VEHICLE_PROVIDER_REPOSITORY,
        useFactory: (connection: Connection) => connection.getRepository(VehicleProvider),
        inject: [DATABASE_PROVIDER_TOKEN],
    },
];