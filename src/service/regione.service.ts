import { Injectable } from '@nestjs/common';
import { Request, Response } from "express";
import { AppDataSource } from 'src/data-source';
import { Regione } from "../entity/Regione";

@Injectable()
export class RegioneService {
  
    async getRegioni(req: Request, res: Response) {
        try {
            const regioni = await AppDataSource.getRepository(Regione).find();
            res.json(regioni);
        } catch (error) {
            res.status(500).json({ error: "Internal server error" });
        }
    }

    async getRegioneById(id: number, res: Response) {
        try {
            const regione = await AppDataSource.getRepository(Regione).findOneById(id);
            if (!regione) {
                return res.status(404).json({ error: "Regione not found" });
            }

            res.json(regione);
        } catch (error) {
            res.status(500).json({ error: "Internal server error" });
        }
    }

    async createRegione(req: Request, res: Response) {
        try {
            const newRegione = await AppDataSource.getRepository(Regione).create(req.body);
            const savedRegione = await AppDataSource.getRepository(Regione).save(newRegione);
            res.status(201).json(savedRegione);
        } catch (error) {
            res.status(500).json({ error: "Internal server error" });
        }
    }

    async updateRegione(req: Request, res: Response) {
        try {
            const regioneID = parseInt(req.params.id);
            let regione = await AppDataSource.getRepository(Regione).findOneById(regioneID);
            if (!regione) {
                return res.status(404).json({ error: "Regione not found" });
            }
            AppDataSource.getRepository(Regione).merge(regione, req.body);
            regione = await AppDataSource.getRepository(Regione).save(regione);
            res.json(regione);
        } catch (error) {
            res.status(500).json({ error: "Internal server error" });
        }
    }

    async deleteRegione(id: number, res: Response) {
        try {
            const deleteResult = await AppDataSource.getRepository(Regione).delete(id);
            if (!deleteResult.affected) {
                return res.status(404).json({ error: "Regione not found" });
            }
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: "Internal server error" });
        }
    }
}
