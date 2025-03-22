import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm'; // Adjusted import
import { CreatePhaseDto } from './dto/create-phase.dto';
import { UpdatePhaseDto } from './dto/update-phase.dto';
import { Phase } from './entities/phase.entity';

@Injectable()
export class PhaseService {
  constructor(
    @InjectRepository(Phase)
    private readonly phaseRepository: Repository<Phase>,
    private readonly dataSource: DataSource,
  ) {}

  create(createMenuDto: CreatePhaseDto) {
    const newData = this.phaseRepository.create(createMenuDto);
    return this.phaseRepository.save(newData);
  }

  async findAll(): Promise<Phase[]> {
    return await this.phaseRepository.find();
  }

  async findOne(id: any): Promise<any> {
    const phase = await this.phaseRepository.findOne({ where: { id } });
    if (!phase) {
      throw new Error(`Phase with id ${id} not found`);
    }
    return phase;
  }

  async getBlockByPhase(id: any): Promise<Phase[]> {
    const result: Phase[] = await this.dataSource.query(
      `SELECT t2.*
       FROM phases t1
       JOIN blocks t2 ON t1.id = t2.phaseId
       WHERE t2.phaseId = ?`,
      [id]
    );
    return result;
  }

  async update(id: number, phase: Phase): Promise<any> {
   
    // return await this.phaseRepository.update(id, phase);

    
    // const response = await this.phaseRepository.findOne({ where: { id } });
    // if (!response) {
    //   throw new Error(`phase with id ${id} not found`);
    // }

    return await this.phaseRepository.update(id, { ...phase })
  }

  async remove(id: number): Promise<void> {

    console.log('DELTE ID', id);
    await this.phaseRepository.delete(id);
  }
}
