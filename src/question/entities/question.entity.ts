import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'questions' })
export class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  question: string;

  @Column({ type: 'int', width: 5 })
  blockId: number;


  @Column({ type: 'varchar', length: 1500 })
  prompt: string;

  @Column('int', { width: 5, default:1 })
  sort: number;

  @Column('int', { width: 5, default:1 })
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


