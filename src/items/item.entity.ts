import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('Book')
export class Item {

    @PrimaryGeneratedColumn()
    readonly id: string;

    @Column()
    readonly title: string;

    @Column()
    readonly price: number;

    @Column()
    readonly description: string;
}