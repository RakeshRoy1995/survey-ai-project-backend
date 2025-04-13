import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'ai-models' })
export class AiModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 450 })
  code: string;

  @Column('int', { width: 5, default:1 })
  sort: number;

  @Column('int', { width: 5, default: 1 })
  status: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

}


