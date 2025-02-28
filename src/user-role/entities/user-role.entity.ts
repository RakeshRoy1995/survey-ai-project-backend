import {  PrimaryGeneratedColumn, Column } from "typeorm"

export enum Status {
    TRUE = 1,
    FALSE = 0,
}
export class UserRole {
    @PrimaryGeneratedColumn()
    id: number

    @Column("int", { width: 5})
    user_id: number

    @Column("int", { width: 5})
    role_id: number



    @Column("int", { width: 5 }) 
    created_by: number

    @Column("int", { width: 5 }) 
    updated_by: number

    @Column("int", { width: 5 }) 
    deleted_by: number

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updated_at: Date

    @Column("datetime", { nullable: true })
    deleted_at: Date

    @Column({
        type: "enum",
        enum: Status,
        default: Status.TRUE,
    })
    status: Status
}
