import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToOne,
    JoinColumn,
    CreateDateColumn,
    UpdateDateColumn,
  } from "typeorm";
  
  import Person from "./Person";
  import Location from "./Location";
  import Image from "./Image";

  import Type from "./Type";
  
  
  @Entity()
  export default class Beschwerde
  {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    status: boolean;
  
    @OneToOne(() => Person)
    @JoinColumn()
    person: Person;

    @OneToOne(() => Location)
    @JoinColumn()
    location: Location;

    @OneToOne(() => Image)
    @JoinColumn()
    image: Image;

    @OneToOne(() => Type)
    @JoinColumn()
    type: Type;
  
    @CreateDateColumn()
    created_at: Date; // Auto-set when the record is created
  
    @UpdateDateColumn()
    updated_at: Date; // Auto-updated when the record is modified
  }
  