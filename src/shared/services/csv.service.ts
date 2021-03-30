import { Injectable } from '@nestjs/common';
import * as csv from 'csvtojson';
import { ColumnMap } from 'src/vehicle/entities/column-map';

@Injectable()
export class CsvService {
    async parse<T>(data: string, columns?: ColumnMap[]): Promise<T[]> {
        const converter = csv();

        const result = await converter.fromString(data);

        if (columns && columns.length) {
            return result.map(x => mapItem<T>(x, columns));
        }

        return result;
    }
}

function mapItem<T>(item: T, columns: ColumnMap[]): T {
    const result = {};

    columns.forEach(column => result[column.target] = item[column.source]);

    return result as T;
}

