import { Body, Controller, Delete, Get, Param, Post, Put, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { SimService } from 'src/service/simservice/sim/sim.service';

@Controller('sim')
export class SimController {
    constructor(private readonly simService: SimService) {}

    @Get()
  async getSim(@Req() req: Request, @Res() res: Response) {
    await this.simService.getSim(req, res);
  }

  @Get(':id')
  async getSimById(@Param('id') id: number, @Res() res: Response) {
    await this.simService.getSimById(id, res);
  }

  @Post()
  async createSim(@Body() regione: any, @Req() req: Request, @Res() res: Response) {
    await this.simService.createSim(req, res);
  }

  @Put(':id')
  async updateSim(@Param('id') id: number, @Body() user: any, @Req() req: Request, @Res() res: Response) {
    await this.simService.updateSim(req, res);
  }

  @Delete(':id')
  async deleteSim(@Param('id') id: number, @Res() res: Response) {
    await this.simService.deleteSim(id, res);
  }
}
