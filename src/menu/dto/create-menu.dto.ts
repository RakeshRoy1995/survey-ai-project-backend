export class CreateMenuDto {
    name: string;
    route: string;
    sort: number;
    parent: number;
    created_by: number;
    updated_by: number;
    deleted_by: number;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    status: number;
}
