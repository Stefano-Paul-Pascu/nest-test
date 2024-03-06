import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 5432,
    username: "utente1",
    password: "12345",
    database: "nest",
    synchronize: true,
    logging: true,
    entities: [],
    subscribers: [],
    migrations: [],
})