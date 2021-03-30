import { Injectable } from '@nestjs/common';
import * as csv from 'csvtojson';
import { ColumnMap } from 'src/vehicle/entities/column-map';

@Injectable()
export class CsvService {
    async parse<T>(data: string, columns?: ColumnMap[]): Promise<T[]> {
        const converter = csv();
        return await converter.fromString(data);
    }
}