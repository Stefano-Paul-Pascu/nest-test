import { Body, Controller, Delete, Get, Param, Post, Put, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { UsersService } from 'src/users/users.service';


@Controller('users')
export class UserController {
  constructor(private readonly userService: UsersService, ) {}

  @Get()
  async getUsers(@Req() req: Request, @Res() res: Response) {
    await this.userService.getUsers(req, res);
  }

  @Get(':id')
  async getUserById(@Param('id') id: number, @Res() res: Response) {
    await this.userService.getUserById(id, res);
  }

   @Post()
   async createUser(@Body() user: any, @Req() req: Request, @Res() res: Response) {
    await this.userService.createUser(req, res);
    
   }

  @Put(':id')
  async updateUser(@Param('id') id: number, @Body() user: any, @Req() req: Request, @Res() res: Response) {
    await this.userService.updateUser(req, res);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: number, @Res() res: Response) {
    await this.userService.deleteUser(id, res);
  }
}