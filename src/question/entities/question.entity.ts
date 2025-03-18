import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
export enum Question {
  TRUE = 1,
  FALSE = 0,
}
@Entity({ name: 'questions' })
export class Block {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  question: string;

  @Column({ type: 'int', width: 5 })
  blockId: number;

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


