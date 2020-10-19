import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('users')
export class User extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    public readonly id: string;

    @Column({ nullable: false, type: 'varchar', length: 16 })
    public readonly name: string;

    @CreateDateColumn()
    public readonly createdAt: Date;
}
