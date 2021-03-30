import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VehicleService } from './services/vehicle/vehicle.service';
import { UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express/multer';
import { UploadedFile } from '@nestjs/common';

@Controller('vehicles')
export class VehicleController {
  constructor(private readonly vehicleService: VehicleService) { }

  @Post(':provider')
  @UseInterceptors(FileInterceptor('vehicles'))
  uploadFile(@UploadedFile() file: Express.Multer.File, @Param('provider') provider: string) {
    const csv = file.buffer.toString();

    return this.vehicleService.importFromCsv(csv, provider);
  }

  @Get()
  findAll() {
    return this.vehicleService.findAll();
  }
}
