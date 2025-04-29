import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePhasePromptDto } from './dto/create-phase-prompt.dto';
import { UpdatePhasePromptDto } from './dto/update-phase-prompt.dto';
import { PhasePrompt } from './entities/phase-prompt.entity';

@Injectable()
export class PhasePromptService {
  constructor(
    @InjectRepository(PhasePrompt)
    private readonly phasePromptRepository: Repository<PhasePrompt>,
  ) {}

  async create(
    createPhasePromptDto: CreatePhasePromptDto,
  ): Promise<PhasePrompt> {
    const phasePrompt = this.phasePromptRepository.create(createPhasePromptDto);
    return this.phasePromptRepository.save(phasePrompt);
  }

  async findByPhaseId(
    createPhasePromptDto: CreatePhasePromptDto,
  ): Promise<PhasePrompt[]> {
    const { phaseId } = createPhasePromptDto;
    return await this.phasePromptRepository.find({
      where: { phaseId },
      take: 5,
    });
  }

  async findAll(): Promise<PhasePrompt[]> {
    return this.phasePromptRepository.find();
  }

  async findOne(id: any): Promise<PhasePrompt> {
    const phasePrompt = await this.phasePromptRepository.findOne(id);
    if (!phasePrompt) {
      throw new Error(`PhasePrompt with id ${id} not found`);
    }
    return phasePrompt;
  }

  async findAllByPhaseId(phaseId: any): Promise<PhasePrompt[]> {
    return this.phasePromptRepository.find({ where: { phaseId } });
  }

  async update(id: number, updatePhasePromptDto: UpdatePhasePromptDto): Promise<PhasePrompt> {
    const updatedPhasePrompt = await this.phasePromptRepository.findOne({
      where: { id },
    });
  
    if (!updatedPhasePrompt) {
      throw new Error(`PhasePrompt with id ${id} not found`);
    }
    await this.phasePromptRepository.update(id, updatePhasePromptDto);
  
    return updatedPhasePrompt;
  }
  

  async remove(id: number): Promise<void> {
    await this.phasePromptRepository.delete(id);
  }
}
