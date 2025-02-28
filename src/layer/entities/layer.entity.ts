import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export class Layer {
    @PrimaryGeneratedColumn()
    id: number

    @Column("varchar", { length: 200 })
    name: string

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updated_at: Date

}