import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'phaseprompts' })
export class PhasePrompt {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  question: string;

  @Column({ type: 'int', width: 5, nullable: true })
  blockId: number;

  @Column({ type: 'int', width: 5, nullable: true })
  phaseId: number;

  @Column({ type: 'varchar', length: 2500 })
  prompt: string;

  @Column('int', { width: 5, default:1 })
  sort: number;

  @Column('int', { width: 5, default:1 })
  status: number;
}



