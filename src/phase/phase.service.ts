/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm'; // Adjusted import
import { CreatePhaseDto } from './dto/create-phase.dto';
import { UpdatePhaseDto } from './dto/update-phase.dto';
import { Phase } from './entities/phase.entity';
import { Block } from '../block/entities/block.entity';
import { GetBlockDto } from './dto/get-block.dto';
import { Question } from '../question/entities/question.entity';

@Injectable()
export class PhaseService {
  constructor(
    @InjectRepository(Phase)
    private readonly phaseRepository: Repository<Phase>,
    @InjectRepository(Block)
    private readonly blockRepository: Repository<Block>,

    @InjectRepository(Question)
    private questionRepository: Repository<Question>,

    private readonly dataSource: DataSource,
  ) {}

  create(createMenuDto: CreatePhaseDto) {
    const newData = this.phaseRepository.create(createMenuDto);
    return this.phaseRepository.save(newData);
  }

  getBlockByPhaseID(createMenuDto: GetBlockDto): Promise<Phase[]> {
    const phaseId = createMenuDto.phase_id; // Ensure phase_id exists in CreatePhaseDto
    return this.blockRepository.find({
      where: { phaseId }, // Ensure phase_id exists in CreatePhaseDto
    });
  }

  async getQuestionByPhaseID(createMenuDto: GetBlockDto): Promise<Phase[]> {
    const phaseId = createMenuDto.phase_id; // Ensure phase_id exists in CreatePhaseDto
    return await this.blockRepository
      .createQueryBuilder('block')
      .innerJoin(Question, 'question', 'question.blockId = block.id')
      .select([
        'question.id',
        'question.blockId',
        'question.question',
        'block.name as blockName',
        'question.status as status',
        'question.sort',
        'block.phaseId as phaseId',
      ])
      .where('block.phaseId = :phaseId', { phaseId })
      .getRawMany();
  }

  async getPhaseOutputByPhaseID(createMenuDto: GetBlockDto): Promise<Phase[]> {
    const phaseId = createMenuDto.phase_id; // Ensure phase_id exists in CreatePhaseDto
    const sql = `SELECT *  FROM user_chat_view ucv where ucv.phaseId = ${phaseId}`;

    console.log(`sql`, sql);
    const members = await this.dataSource.query(sql);
    return members;
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
      [id],
    );
    return result;
  }

  async update(id: number, phase: Phase): Promise<any> {
    return await this.phaseRepository.update(id, phase);
  }

  async remove(id: number): Promise<void> {
    console.log('DELTE ID', id);
    await this.phaseRepository.delete(id);
  }
}
