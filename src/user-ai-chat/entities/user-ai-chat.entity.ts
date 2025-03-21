import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'useraichats' })
export class UserAiChat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  userId: number;

  @Column('int')
  question_id: number;

  @Column({ type: 'varchar', length: 100 })
  conversetion_id: string;

  @Column({ type: 'varchar', length: 5000 })
  aiReply: string;

  @Column({ type: 'int', default: 1 })
  status: boolean;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
}

