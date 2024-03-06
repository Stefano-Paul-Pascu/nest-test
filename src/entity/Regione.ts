import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm"
import { User } from "./User"

@Entity()
export class Regione {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string

    @OneToMany(() => User, (user) => user.regione)
    users: User[]

}