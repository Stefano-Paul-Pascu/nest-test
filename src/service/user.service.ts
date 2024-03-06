import { Injectable } from '@nestjs/common';
import { Request, Response } from "express";
import { AppDataSource } from 'src/data-source';
import { User } from "../entity/User";

@Injectable()
export class UserService {
  
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
            const newUser = await AppDataSource.getRepository(User).create(req.body);
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
}
