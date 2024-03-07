import { Body, Controller, Delete, Get, Param, Post, Put, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { RegioneService } from 'src/service/regioneservice/regioneservice.service';


@Controller('regioni')
export class RegioneController {
  constructor(private readonly regioneService: RegioneService) {}

  @Get()
  async getRegioni(@Req() req: Request, @Res() res: Response) {
    await this.regioneService.getRegioni(req, res);
  }

  @Get(':id')
  async getRegioneById(@Param('id') id: number, @Res() res: Response) {
    await this.regioneService.getRegioneById(id, res);
  }

  @Post()
  async createRegione(@Body() regione: any, @Req() req: Request, @Res() res: Response) {
    await this.regioneService.createRegione(req, res);
  }

  @Put(':id')
  async updateRegione(@Param('id') id: number, @Body() user: any, @Req() req: Request, @Res() res: Response) {
    await this.regioneService.updateRegione(req, res);
  }

  @Delete(':id')
  async deleteRegione(@Param('id') id: number, @Res() res: Response) {
    await this.regioneService.deleteRegione(id, res);
  }
}