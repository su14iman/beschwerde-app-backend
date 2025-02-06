import {
    Entity,
    PrimaryGeneratedColumn,
    Column
} from "typeorm";

@Entity()
export default class Image
{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    url: string;
}