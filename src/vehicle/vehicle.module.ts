import { Module } from '@nestjs/common';
import { VehicleController } from './vehicle.controller';
import { DatabaseModule } from 'src/database/database.module';
import { VehicleService } from './services/vehicle/vehicle.service';
import { vehicleProviders } from './vehicle.providers';
import { VehicleProviderService } from './services/vehicle-provider/vehicle-provider.service';
import { SharedModule } from 'src/shared/shared.module';

@Module({
  imports: [
    SharedModule,
    DatabaseModule,
  ],
  controllers: [
    VehicleController
  ],
  providers: [
    ...vehicleProviders,
    VehicleService,
    VehicleProviderService,
  ]
})
export class VehicleModule { }
