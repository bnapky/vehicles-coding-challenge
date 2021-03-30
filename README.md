## Technical details
- Framework: NestJs
- Language: Typescript
- Node Version: 12.13.0
- Database: In-memory Sqlite3
- Testing Framework: Jasmine

## Goals Accomplished:
- Dynamic column configuration stored in database per vehicle provider.
- Successful vehicle collection import from csv file.
- In-memory persisted database.
- VehicleService Spec File as proof of concept for unit tests. (Behavior testing, Dependency mocking and edge case verification)
- Provided samples for csv files and a postman collection.  Source: `src/samples`

## Assumptions, pre-defined scenarios, and design decisions.
 - Posible CSV fields: UUID, VIN, MAKE, MODEL, MILEAGE, YEAR, PRICE, ZIP CODE, CREATE DATE, UPDATE DATE.
 - Required fields: *UUID, VIN, MODEL.*
 - No formatting assumptions for data columns.
 - Sample CSV files and a POSTMAN collection provided within src/samples directory.
 - Column Mappings are stored within database within each vehicle provider.
 - Database is seeded with 2 Dummy Vehicle Providers during bootstrap.
 - Test Coverage is not considered.
 

## Unit Tests
Only VehicleService has been provided with a spec file handling edge cases and mocking dependencies when importing the CSV file.
Source at: `src\vehicle\services\vehicle\vehicle.service.spec.ts`

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
