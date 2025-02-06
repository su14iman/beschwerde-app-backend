import { 
    Entity, 
    PrimaryGeneratedColumn, 
    Column 
} from "typeorm";

@Entity()
export default class Person
{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  firstName: string;

  @Column({ nullable: true })
  lastName: string;

  @Column()
  email: string;

  @Column({ nullable: true })
  phone: number;

  @Column()
  ip: string;
}
