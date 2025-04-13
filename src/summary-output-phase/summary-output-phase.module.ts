import { Module } from '@nestjs/common';
import { SummaryOutputPhaseService } from './summary-output-phase.service';
import { SummaryOutputPhaseController } from './summary-output-phase.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SummaryOutputPhase } from './entities/summary-output-phase.entity';
import { SummaryOutputPhaseHistory } from './entities/summary-output-phase-history.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([SummaryOutputPhase, SummaryOutputPhaseHistory]),
  ],
  controllers: [SummaryOutputPhaseController],
  providers: [SummaryOutputPhaseService],
})
export class SummaryOutputPhaseModule {}
