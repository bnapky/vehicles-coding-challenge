import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Vehicle {
    @PrimaryGeneratedColumn()
    id?: string;

    @Column()
    uuid: string;

    @Column()
    vin: string;

    @Column()
    model: string;

    @Column({ nullable: true })
    make: string;

    @Column({ nullable: true })
    mileage: string;

    @Column({ nullable: true })
    year: number;

    @Column({ nullable: true })
    price: number;

    @Column({ nullable: true })
    zipCode: string;

    @Column({ nullable: true })
    createdOn: string;

    @Column({ nullable: true })
    updatedOn: string;
}
