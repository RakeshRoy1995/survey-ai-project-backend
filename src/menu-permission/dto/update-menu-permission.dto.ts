import { PartialType } from '@nestjs/mapped-types';
import { CreateMenuPermissionDto } from './create-menu-permission.dto';

export class UpdateMenuPermissionDto extends PartialType(CreateMenuPermissionDto) {}
