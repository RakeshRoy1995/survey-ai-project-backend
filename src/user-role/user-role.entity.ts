import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export enum Status {
  TRUE = 1,
  FALSE = 0,
}

@Entity({ name: 'user_roles' })
export class UserRole {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int', { width: 5 })
  userId: number;

  @Column('int', { width: 5 })
  roleId: number;

  @Column('int', { width: 5 })
  created_by: number;

  @Column('int', { width: 5, nullable: true })
  updated_by: number;

  @Column('int', { width: 5, nullable: true })
  deleted_by: number;

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

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.TRUE,
  })
  status: Status;
}
