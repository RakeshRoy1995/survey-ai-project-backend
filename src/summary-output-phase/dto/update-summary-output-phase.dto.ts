import { PartialType } from '@nestjs/mapped-types';
import { CreateSummaryOutputPhaseDto } from './create-summary-output-phase.dto';

export class UpdateSummaryOutputPhaseDto extends PartialType(CreateSummaryOutputPhaseDto) {}
