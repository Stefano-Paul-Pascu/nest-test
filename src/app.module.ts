import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './controller/user.controller';
import { RegioneController } from './controller/regione.controller';
import { UserService } from './service/user.service';
import { RegioneService } from './service/regione.service';
import { Regione } from './entity/Regione';
import { User } from './entity/User';

@Module({
  imports: [],
  controllers: [AppController, UserController, RegioneController],
  providers: [AppService, UserService, RegioneService],
})
export class AppModule {}
