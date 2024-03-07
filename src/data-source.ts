import "reflect-metadata";
import { DataSource } from "typeorm";
import { Regione } from "./entity/Regione";
import { Sim } from "./entity/Sim";
import { User } from "./entity/User";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "nest",
    synchronize: true,
    logging: true,
    entities: [User, Regione, Sim],
    subscribers: [],
    migrations: [],
})