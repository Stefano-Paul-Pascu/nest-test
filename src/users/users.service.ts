import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { Request, Response } from "express";
import { AppDataSource } from 'src/data-source';
import { User } from 'src/entity/User';

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}



@Injectable()
export class UsersService {


  async getUsers(req: Request, res: Response) {
    try {
        const users = await AppDataSource.getRepository(User).find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
}

async getUserById(id: number, res: Response) {
    try {
        const user = await AppDataSource.getRepository(User).findOneById(id);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
}




async createUser(req: Request, res: Response) {
    try {
        const { email, password, nome, cognome, eta, regione } = req.body;
        
        // Controlla se l'email è nel formato corretto
        if (!validateEmail(email)) {
            return res.status(400).json({ error: "Invalid email format" });
        }
        const x = parseInt(process.env['NEST_SALT']);
        console.log("Parseint : ", x);
        console.log("Nest.salt : " , process.env['NEST_SALT'] )
        const hashedPassword = await bcrypt.hash(password, x);
        const newUser = await AppDataSource.getRepository(User).create({ email, password: hashedPassword, nome, cognome, eta, regione });
        const savedUser = await AppDataSource.getRepository(User).save(newUser);
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
}







async updateUser(req: Request, res: Response) {
    try {
        const userId = parseInt(req.params.id);
        let user = await AppDataSource.getRepository(User).findOneById(userId);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        AppDataSource.getRepository(User).merge(user, req.body);
        user = await AppDataSource.getRepository(User).save(user);
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
}

async deleteUser(id: number, res: Response) {
    try {
        const deleteResult = await AppDataSource.getRepository(User).delete(id);
        if (!deleteResult.affected) {
            return res.status(404).json({ error: "User not found" });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
}

  async findOne(email: string): Promise<User | null> {
    try{
        const user = await AppDataSource.getRepository(User).findOne({where: {email}});
        return user || null;
        
    }catch(error){
        throw error
    }
  }
}