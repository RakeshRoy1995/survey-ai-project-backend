import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSummaryOutputPhaseDto } from './dto/create-summary-output-phase.dto';
import { UpdateSummaryOutputPhaseDto } from './dto/update-summary-output-phase.dto';
import { SummaryOutputPhase } from './entities/summary-output-phase.entity';

@Injectable()
export class SummaryOutputPhaseService {
  constructor(
    @InjectRepository(SummaryOutputPhase)
    private summaryOutputPhaseRepository: Repository<SummaryOutputPhase>,
  ) {}

  async create(
    createSummaryOutputPhaseDto: CreateSummaryOutputPhaseDto,
  ): Promise<SummaryOutputPhase> {

    await this.summaryOutputPhaseRepository.delete({
      phasepromptId: createSummaryOutputPhaseDto.phasepromptId,
      userId: createSummaryOutputPhaseDto.userId,
      phaseId: createSummaryOutputPhaseDto.phaseId,
    });
    const summaryOutputPhase = this.summaryOutputPhaseRepository.create(
      createSummaryOutputPhaseDto,
    );
    return this.summaryOutputPhaseRepository.save(summaryOutputPhase);
  }

  async findAll(): Promise<SummaryOutputPhase[]> {
    return this.summaryOutputPhaseRepository.find();
  }

  async findAllByPhaseId(phaseId: any , userId:any): Promise<SummaryOutputPhase[]> {
    return this.summaryOutputPhaseRepository.find({ where: { phaseId , userId} });
  }

  async findOne(id: any): Promise<SummaryOutputPhase> {
    const summaryOutputPhase =
      await this.summaryOutputPhaseRepository.findOne(id);
    if (!summaryOutputPhase) {
      throw new Error(`SummaryOutputPhase with id ${id} not found`);
    }
    return summaryOutputPhase;
  }

  async update(
    id: any,
    updateSummaryOutputPhaseDto: UpdateSummaryOutputPhaseDto,
  ): Promise<SummaryOutputPhase> {
    await this.summaryOutputPhaseRepository.update(id, updateSummaryOutputPhaseDto);
    const summaryOutputPhase = await this.summaryOutputPhaseRepository.findOne(id);
    if (!summaryOutputPhase) {
      throw new Error(`SummaryOutputPhase with id ${id} not found`);
    }
    return summaryOutputPhase;
  }

  async remove(id: number): Promise<void> {
    await this.summaryOutputPhaseRepository.delete(id);
  }
}
