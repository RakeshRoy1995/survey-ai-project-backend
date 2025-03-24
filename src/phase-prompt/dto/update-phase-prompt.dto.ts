import { PartialType } from '@nestjs/mapped-types';
import { CreatePhasePromptDto } from './create-phase-prompt.dto';

export class UpdatePhasePromptDto extends PartialType(CreatePhasePromptDto) {}
