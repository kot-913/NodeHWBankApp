import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AccountsModule } from '../accounts/accounts.module';
import { UsersController } from './users.controller';
import { User } from './users.entity';
import { UsersService } from './users.service';

@Module({
    imports: [TypeOrmModule.forFeature([User]), AccountsModule],
    providers: [ UsersService],
    controllers: [ UsersController],
    exports: [ UsersService]
})

export class UsersModule {}
