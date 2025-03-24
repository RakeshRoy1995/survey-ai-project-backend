import { Module } from '@nestjs/common';
import { SummaryOutputPhaseService } from './summary-output-phase.service';
import { SummaryOutputPhaseController } from './summary-output-phase.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SummaryOutputPhase } from './entities/summary-output-phase.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SummaryOutputPhase])],
  controllers: [SummaryOutputPhaseController],
  providers: [SummaryOutputPhaseService],
})
export class SummaryOutputPhaseModule {}
