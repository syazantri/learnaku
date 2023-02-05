import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: "users"})
export class Users {
    @PrimaryGeneratedColumn({
      type: 'bigint',
      name: 'user_id',
    })
    id: number;
  
    @Column({
      nullable: false,
      default: '',
      name: 'username'
    })
    username: string;
  
    @Column({
      name: 'email_address',
      nullable: false,
      default: '',
    })
    email: string;
  
    @Column({
      nullable: false,
      default: '',
      name: 'password'
    })
    password: string;
  }