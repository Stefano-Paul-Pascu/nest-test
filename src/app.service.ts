import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Ciao a tutti, mi chiamo Dario';
  }
}
