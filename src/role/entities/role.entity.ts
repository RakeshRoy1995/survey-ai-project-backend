import {  PrimaryGeneratedColumn, Column, Entity } from "typeorm"
export enum Status {
    TRUE = 1,
    FALSE = 0,
}


@Entity({ name: 'roles' })
export class Role {
    @PrimaryGeneratedColumn()
    id: number

    @Column("varchar", { length: 225 })
    name: string

    @Column("int", { width: 5, default: 0 })
    sort: number



    @Column("int", { width: 5 , default: 0}) 
    created_by: number

    @Column("int", { width: 5 , default: 0}) 
    updated_by: number

    @Column("int", { width: 5, default: 0 }) 
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
