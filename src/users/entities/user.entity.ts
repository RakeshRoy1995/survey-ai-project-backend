import { UserRole } from 'src/user-role/user-role.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
export enum Status {
  TRUE = 1,
  FALSE = 0,
}
@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  username: string;

  @Column({ type: 'varchar', length: 233, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 255 })
  password: string;

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

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.TRUE,
  })
  status: Status;

  @OneToMany(() => UserRole, (userRole) => userRole.userId)
  userRoles: UserRole[];
}
