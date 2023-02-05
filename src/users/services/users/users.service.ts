import { Injectable } from '@nestjs/common';
import { Users } from 'src/typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from 'src/users/dto/users.dtos';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users) private readonly userRepository: Repository<Users>,
    ){}

    createUser(CreateUserDto: CreateUserDto) {
        const newUser = this.userRepository.create(CreateUserDto);
        return this.userRepository.save(newUser);
      }
          
    findUsersById(id: number) {
        return this.userRepository.findOne({where: {id}});
      }

    getUser(user: CreateUserDto){
        return this.userRepository.findOne({where: user})
    }
}

