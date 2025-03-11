import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';
export enum Status {
  TRUE = 1,
  FALSE = 0,
}
@Entity({ name: 'menu_permissions' })
export class MenuPermission {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int', { width: 5 })
  layer_id: number;

  @Column('int', { width: 5 })
  role_id: number;

  @Column('int', { width: 5 })
  menu_id: number;

  @Column('int', { width: 5, nullable: true })
  created_by: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updated_at: Date;
}
