import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './controller/user.controller';
import { RegioneController } from './controller/regione.controller';
import { UserService } from './service/user.service';
import { RegioneService } from './service/regione.service';
import { UserModule } from './module/user.module';
import { AuthModule } from './module/auth.module';

@Module({
  imports: [UserModule, AuthModule],
  
  controllers: [AppController, UserController, RegioneController],
  providers: [AppService, UserService, RegioneService],
})
export class AppModule {}
