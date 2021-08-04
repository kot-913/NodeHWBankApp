import { AccountsService } from './accounts.service';
import { HttpStatus, HttpException, Controller, Body, Post, Delete, Param } from '@nestjs/common';

@Controller('accounts')
export class AccountsController {
    constructor (private accountsService: AccountsService) {}
    
    @Post('create-account')
    public async register(@Body() UserId: number): Promise<any> {
    const account: any = await this.accountsService.create(UserId);
    if (!account) {
        throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
    }
    return account;
    }

    @Delete(':id')
    async remove(@Param('id') id: string): Promise<void> {
    return await this.accountsService.remove(id);
    }
}