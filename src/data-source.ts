import "reflect-metadata"
import { DataSource } from "typeorm";
import { User } from "./entity/User";
import { Regione } from "./entity/Regione";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "utente1",
    password: "12345",
    database: "nest",
    synchronize: true,
    logging: true,
    entities: [User, Regione],
    subscribers: [],
    migrations: [],
})