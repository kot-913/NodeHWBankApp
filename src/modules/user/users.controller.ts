import { Post, HttpException, Controller, Body, HttpStatus, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './interface/users.interface';
import { User } from './users.entity';
import { Param } from '@nestjs/common';
import { Delete } from '@nestjs/common';

@Controller('users') 
export class UsersController {
    constructor (private usersService: UsersService) {}

    @Post('register') 
        async register(@Body() userDto: CreateUserDto): Promise<User> {
        return await this.usersService.create(userDto);
      }

    @Get()
      async findAll(): Promise<User[]> {
      return await this.usersService.findAll();
      }

    @Get(':id')
      async findOne(@Param('id') id: string): Promise<User> {
      return await this.usersService.findOne(id);
      }

    @Delete(':id')
      async remove(@Param('id') id: string): Promise<void> {
      return await this.usersService.remove(id);
      }
    }