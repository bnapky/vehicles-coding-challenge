import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ColumnMap } from './column-map';

@Entity()
export class VehicleProvider {
    @PrimaryGeneratedColumn()
    id?: string;

    @Column()
    name: string;

    @Column('simple-json')
    columns?: ColumnMap[];
}
