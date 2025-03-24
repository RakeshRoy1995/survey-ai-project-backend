import { Module } from '@nestjs/common';
import { PhasePromptService } from './phase-prompt.service';
import { PhasePromptController } from './phase-prompt.controller';
import { PhasePrompt } from './entities/phase-prompt.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PhasePrompt])],
  controllers: [PhasePromptController],
  providers: [PhasePromptService],
})
export class PhasePromptModule {}
