import {  PrimaryGeneratedColumn, Column } from "typeorm"

export enum Status {
    TRUE = 1,
    FALSE = 0,
}
export class MenuRoute {
    @PrimaryGeneratedColumn()
    id: number

    @Column("varchar", { length: 225 })
    name: string


    @Column("int", { width: 5 })
    menu_id: number

    @Column("varchar", { length: 115 })
    section: number

    @Column("int", { width: 5 , default: 0})
    sort: number


    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updated_at: Date

    @Column({
        type: "enum",
        enum: Status,
        default: Status.TRUE,
    })
    status: Status
}
