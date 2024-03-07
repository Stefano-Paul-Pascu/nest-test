import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';


import { AuthModule } from './auth/auth.module';
import { RegioneController } from './controller/regione/regione.controller';
import { SimController } from './controller/sim/sim/sim.controller';
import { UserController } from './controller/user/user.controller';
import { RegioneService } from './service/regioneservice/regioneservice.service';
import { SimService } from './service/simservice/sim/sim.service';
import { UserService } from './service/userservice/userservice.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule, AuthModule],
  
  controllers: [AppController, UserController, RegioneController, SimController],
  providers: [AppService, UserService, RegioneService, SimService, ],
})
export class AppModule {}