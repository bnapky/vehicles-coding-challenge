import { Controller, Get, Post, Param, Res, HttpStatus } from '@nestjs/common';
import { VehicleService } from './services/vehicle/vehicle.service';
import { UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express/multer';
import { UploadedFile } from '@nestjs/common';
import { Response } from 'express';
import { OperationResult } from '../shared/dto/operation-result.dto';
import { Vehicle } from './entities/vehicle.entity';

@Controller('vehicles')
export class VehicleController {
  constructor(private readonly vehicleService: VehicleService) { }

  @Post(':provider')
  @UseInterceptors(FileInterceptor('vehicles'))
  async uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Param('provider') provider: string,
    @Res() res: Response
  ) {

    if (!file) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        success: false,
        message: 'Vehicles CSV file is required.'
      });
    }

    const csv = file.buffer.toString();

    const result: OperationResult<Vehicle[]> = await this.vehicleService
      .importFromCsv(csv, provider);

    res.send(result);
  }

  @Get()
  findAll() {
    return this.vehicleService.findAll();
  }
}
