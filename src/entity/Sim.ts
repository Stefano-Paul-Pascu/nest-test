import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Sim{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string

    @Column()
    tipo: string

  
}