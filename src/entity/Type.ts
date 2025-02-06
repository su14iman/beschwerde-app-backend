import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToOne,
    JoinColumn
} from "typeorm";

import TypeCategory from "./TypeCategory";

@Entity()
export default class Type
{
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToOne(() => TypeCategory)
    @JoinColumn()
    categories: TypeCategory;

}
