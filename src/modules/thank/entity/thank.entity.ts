import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';

import { User } from './../../user/entity/user.entity';

@Entity('thanks')
export class Thank extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    public readonly id: string;

    @Column({ nullable: true, type: 'varchar', length: 16 })
    public readonly from: string;

    @Column({ nullable: false, type: 'varchar', length: 16 })
    public readonly to: string;

    @Column({ nullable: true, type: 'varchar', length: 200 })
    public readonly reason: string;

    @ManyToOne(() => User, (user: User) => user.thanks)
    @JoinColumn({ name: 'todoId' })
    public readonly user: User;

    @CreateDateColumn()
    public readonly createdAt: Date;
}
