import { Controller, Get } from '@nestjs/common';
import { VehicleService } from './services/vehicle/vehicle.service';

@Controller('vehicles')
export class VehicleController {
  constructor(private readonly vehicleService: VehicleService) { }

  @Get()
  findAll() {
    return this.vehicleService.findAll();
  }
}
