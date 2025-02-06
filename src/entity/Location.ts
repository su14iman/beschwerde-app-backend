import {
    Entity,
    PrimaryGeneratedColumn,
    Column
} from "typeorm";

@Entity()
export default class Location
{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    lon: number;
    
    @Column()
    lat: number;
}