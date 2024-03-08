import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { Regione } from "./Regione"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    email: string

    @Column()
    password: string

    @Column()
    nome: string

    @Column()
    cognome: string

    @Column()
    eta: number

    @ManyToOne(() => Regione, (regione) => regione.users)
    regione: Regione

}