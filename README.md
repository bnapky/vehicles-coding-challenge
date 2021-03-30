## Technical details
- Framework: NestJs
- Language: Typescript
- Node Version: 12.13.0
- Database: In-memory Sqlite3

## Assumptions, pre-defined scenarios, and design decisions.
 - Posible CSV fields: UUID, VIN, MAKE, MODEL, MILEAGE, YEAR, PRICE, ZIP CODE, CREATE DATE, UPDATE DATE.
 - Required fields: *UUID, VIN, MODEL.*
 - No formatting assumptions for data columns.
 - Sample CSV files provided within src/samples directory.
 - Column Mappings are stored within database within each vehicle provider.
 - Database is seeded with 2 Dummy Vehicle Providers during bootstrap.
 
 ## API Endpoints:
 #### GET /vehicles   
 Fetch collection of vehicles
 
 #### POST /vehicles/:provider  
 Bulk import of vehicles by provider in CSV format.
 
    Body
        Key: vehicles  Type: file - .csv
        Key: provider  Type: string
    
## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test
