import { Injectable } from '@nestjs/common';
import { AppDataSource } from 'src/data-source';
import { User } from 'src/entity/User';

// This should be a real class/interface representing a user entity
// export type User = any;

@Injectable()
export class UsersService {
  // private readonly users = [
  //   {
      
  //     email: 'john',
  //     password: 'changeme',
  //   },
  //   {
      
  //     email: 'maria',
  //     password: 'guess',
  //   },
  // ];

  // async findOne(email: string): Promise<User | undefined> {
  //   return this.users.find(user => user.email === email);
  // }

  async findOne(email: string): Promise<User | null> {
    try{
        const user = await AppDataSource.getRepository(User).findOne({where: {email}});
        return user || null;
    }catch(error){
        throw error
    }
  }
}