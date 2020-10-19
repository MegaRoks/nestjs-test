import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('thanks')
export class Thank extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    public readonly id: string;

    @Column({ nullable: false, type: 'varchar', length: 16 })
    public readonly from: string;

    @Column({ nullable: false, type: 'varchar', length: 16 })
    public readonly to: string;

    @Column({ nullable: false, type: 'varchar', length: 200 })
    public readonly reason: string;

    @CreateDateColumn()
    public readonly createdAt: Date;
}
