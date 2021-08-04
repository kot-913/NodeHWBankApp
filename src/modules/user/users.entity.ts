import { JoinTable } from 'typeorm';
import { PrimaryGeneratedColumn, Column, Entity, OneToOne } from 'typeorm';
import { Account } from '../accounts/accounts.entity';
@Entity('users')
export class User{

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({unique: true})
    username: string;

    @Column({unique: true})
    email: string;

    @Column()
    password: string;

    @OneToOne(() => Account, {eager: true, cascade: true, nullable: true})
    @JoinTable()
    account: Account;
}