import { OneToOne } from 'typeorm';
import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';
import { User } from '../user/users.entity';
@Entity('accounts')
export class Account{
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({unique: true})
    accountNumber: string;

    @Column({type: 'decimal', default: 100.5})
    balance: number;

    @Column()
    password: string;

    @OneToOne(() => User)
    user: User
}