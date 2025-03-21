import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'blocks' })
export class Block {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 450 })
  discription: string;

  @Column({ type: 'varchar', length: 450 })
  prompt: string;

  @Column({ type: 'int', width: 5 })
  phaseId: number;

  @Column('int', { width: 5, default:1 })
  sort: number;

  @Column({ type: 'varchar', length: 100, default: null })
  img: string;

  @Column({ type: 'varchar', length: 50, default: null })
  color: string;

  @Column('int', { width: 5, default: 1 })
  status: number;


  @Column('int', { width: 5, nullable: true })
  created_by: number;

  @Column('int', { width: 5, nullable: true })
  updated_by: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updated_at: Date;

  @Column('datetime', { nullable: true })
  deleted_at: Date;
}

