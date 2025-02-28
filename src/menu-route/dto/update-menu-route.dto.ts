import { PartialType } from '@nestjs/mapped-types';
import { CreateMenuRouteDto } from './create-menu-route.dto';

export class UpdateMenuRouteDto extends PartialType(CreateMenuRouteDto) {}
