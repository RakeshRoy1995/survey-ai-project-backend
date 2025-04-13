import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'summary-output-phase-histories' })
export class SummaryOutputPhaseHistory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 5000 })
  output: string;

  @Column({ type: 'int', width: 5 })
  phasepromptId: number;

  @Column({ type: 'int', width: 5 })
  userId: number;

  @Column({ type: 'int', width: 5 })
  phaseId: number;

  @Column('int', { width: 5, default: 1 })
  sort: number;

  @Column('int', { width: 5, default: 1 })
  status: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
}
