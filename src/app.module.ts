import { Module } from '@nestjs/common';
import { VehicleModule } from './vehicle/vehicle.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [VehicleModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
