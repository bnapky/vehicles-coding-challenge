import { DATABASE_PROVIDER_TOKEN } from 'src/constants';
import { createConnection } from 'typeorm';

export const databaseProviders = [
    {
        provide: DATABASE_PROVIDER_TOKEN ,
        useFactory: async () => await createConnection({
            type: "sqlite",
            database: ":memory:",
            dropSchema: true,
            entities: [
                __dirname + '/../**/*.entity{.ts,.js}',
            ],
            synchronize: true,
            logging: false
        }),
    },
];