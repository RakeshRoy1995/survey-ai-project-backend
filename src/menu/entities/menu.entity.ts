import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
export enum Status {
    TRUE = 1,
    FALSE = 0,
}
export class Menu {
    @PrimaryGeneratedColumn()
    id: number

    @Column("varchar", { length: 200 })
    name: string

    @Column("varchar", { length: 100 })
    route : string

    @Column("int", { default: 0 })
    sort: number

    @Column("int", { width: 5 })
    parent: number




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