import { Module } from '@nestjs/common';
import { VehicleModule } from './vehicle/vehicle.module';
import { DatabaseModule } from './database/database.module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [SharedModule, DatabaseModule, VehicleModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
