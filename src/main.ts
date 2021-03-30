import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { VEHICLE_PROVIDERS } from './vehicle-providers-list';
import { VehicleProviderService } from './vehicle/services/vehicle-provider/vehicle-provider.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const providerService = app.get(VehicleProviderService);

  // Assumed/pre-existing vehicle providers
  VEHICLE_PROVIDERS.forEach(async x => await providerService.insert(x));

  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`App running on port ${port}`);
}
bootstrap();
