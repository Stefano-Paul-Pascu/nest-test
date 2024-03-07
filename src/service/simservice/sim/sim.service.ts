import { Injectable } from '@nestjs/common';
import { Request, Response } from "express";
import { AppDataSource } from 'src/data-source';
import { Sim } from 'src/entity/Sim';

@Injectable()
export class SimService {
    async getSim(req: Request, res: Response) {
        try {
            const sim = await AppDataSource.getRepository(Sim).find();
            res.json(sim);
        } catch (error) {
            res.status(500).json({ error: "Internal server error" });
        }
    }

    async getSimById(id: number, res: Response) {
        try {
            const sim = await AppDataSource.getRepository(Sim).findOneById(id);
            if (!sim) {
                return res.status(404).json({ error: "User not found" });
            }
            res.json(sim);
        } catch (error) {
            res.status(500).json({ error: "Internal server error" });
        }
    }

    async createSim(req: Request, res: Response) {
        try {
            const newSim = await AppDataSource.getRepository(Sim).create(req.body);
            const savedSim = await AppDataSource.getRepository(Sim).save(newSim);
            res.status(201).json(savedSim);
        } catch (error) {
            res.status(500).json({ error: "Internal server error" });
        }
    }

    async updateSim(req: Request, res: Response) {
        try {
            const SimId = parseInt(req.params.id);
            let sim = await AppDataSource.getRepository(Sim).findOneById(SimId);
            if (!sim) {
                return res.status(404).json({ error: "User not found" });
            }
            AppDataSource.getRepository(Sim).merge(sim, req.body);
            sim = await AppDataSource.getRepository(Sim).save(sim);
            res.json(sim);
        } catch (error) {
            res.status(500).json({ error: "Internal server error" });
        }
    }

    async deleteSim(id: number, res: Response) {
        try {
            const deleteResult = await AppDataSource.getRepository(Sim).delete(id);
            if (!deleteResult.affected) {
                return res.status(404).json({ error: "User not found" });
            }
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: "Internal server error" });
        }
    }
}
