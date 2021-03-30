import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { VEHICLE_PROVIDERS } from './vehicle-providers-list';
import { VehicleProviderService } from './vehicle/services/vehicle-provider/vehicle-provider.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const providerService = app.get(VehicleProviderService);

  // Assumed/pre-existing vehicle providers
  VEHICLE_PROVIDERS.forEach(async x => await providerService.insert(x));

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
