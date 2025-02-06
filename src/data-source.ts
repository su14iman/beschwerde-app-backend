import "dotenv/config"
import "reflect-metadata"
import { DataSource } from "typeorm"

// Entities
import Image from "./entity/Image"
import Location from "./entity/Location"
import Person from "./entity/Person"
import TypeCategory from "./entity/TypeCategory"
import Type from "./entity/Type"
import Beschwerde from "./entity/Beschwerde"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || "3306"),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: process.env.DEBUG === "1" ? true : false,
    entities: [
        Image,
        Location,
        Person,
        TypeCategory,
        Type,
        Beschwerde,
    ],
    migrations: ["src/migration/**/*.ts"],
    subscribers: [],
})
