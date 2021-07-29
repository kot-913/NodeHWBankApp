import { BadRequestException, Injectable } from '@nestjs/common';
import { User } from './users.entity';
import { hash} from 'bcrypt';
import { AccountsService } from '../accounts/accounts.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './interface/users.interface';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private usersRepository: Repository<User>,
        private accountsService: AccountsService,
    ) {}

    public async create(userDto: CreateUserDto): Promise<User> {
        try {
             const existedUser = await this.findOne(userDto.email);
             if(existedUser){
                throw new BadRequestException("Email is already in use!");
             }
             const hashedPassword = await hash(userDto.password, 10);
             const user = await this.usersRepository.save({...userDto, password: hashedPassword});
             
             return user;
        } catch (e) {
            console.error("e", e);
        }
    }

    async findAll() {
        return await this.usersRepository.find();
    }

    async findOne(email: string) {
        const user = await this.usersRepository.findOne({where: {email}});
        if(!user) {
            throw new NotFoundException('User not found');
        }
        return user;
    }

    async remove(id: string): Promise<void> {
        await this.usersRepository.delete(id);
    }
}