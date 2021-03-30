import { VehicleProvider } from "./vehicle/entities/vehicle-provider.entity";

export const VEHICLE_PROVIDERS: VehicleProvider[] = [
    {
        name: 'BobDylan',
        columns: [
            {
                source: 'UUID',
                target: 'uuid',
            },
            {
                source: 'VIN',
                target: 'vin',
            },
            {
                source: 'MAKE',
                target: 'make',
            },
            {
                source: 'MODEL',
                target: 'model',
            },
            {
                source: 'MILEAGE',
                target: 'mileage',
            },
            {
                source: 'YEAR',
                target: 'year',
            },
            {
                source: 'PRICE',
                target: 'price',
            },
            {
                source: 'ZIP CODE',
                target: 'zipCode',
            },
            {
                source: 'CREATE DATE',
                target: 'createdOn',
            },
            {
                source: 'UPDATE DATE',
                target: 'updatedOn',
            },
        ]
    },
    {
        name: 'JohnDoe',
        columns: [
            {
                source: 'UUID',
                target: 'uuid',
            },
            {
                source: 'VIN',
                target: 'vin',
            },
            {
                source: 'MODEL',
                target: 'model',
            },
            {
                source: 'MAKE',
                target: 'make',
            },
        ]
    }
];
