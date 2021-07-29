import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Account } from './accounts.entity';

@Injectable()
export class AccountsService {
    constructor (
        @InjectRepository(Account) 
        private accountsRepository: Repository<Account>
    ) {}

    async create(UserId: number): Promise<object> {
        return {}
    }

    async remove(id: string): Promise<void> {
        await this.accountsRepository.delete(id);
    }
}