import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany } from 'typeorm';

import { Thank } from './../../thank/entity/thank.entity';

@Entity('users')
export class User extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    public readonly id: string;

    @Column({ nullable: false, type: 'varchar', length: 16 })
    public readonly name: string;

    @OneToMany(() => Thank, (thank: Thank) => thank.user)
    public readonly thanks: Thank[];

    @CreateDateColumn()
    public readonly createdAt: Date;
}
