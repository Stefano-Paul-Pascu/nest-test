import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm"
import { Regione } from "./Regione"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string

    @Column()
    cognome: string

    @Column()
    eta: number

    @ManyToOne(() => Regione, (regione) => regione.nome)
    regione: Regione[]

}