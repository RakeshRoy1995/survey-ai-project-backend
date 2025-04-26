import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhaseService } from './phase.service';
import { PhaseController } from './phase.controller';
import { Phase } from './entities/phase.entity';
import { Block } from '../block/entities/block.entity';
import { Question } from '../question/entities/question.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Phase, Block, Question])],
  controllers: [PhaseController],
  providers: [PhaseService],
})
export class PhaseModule {}
