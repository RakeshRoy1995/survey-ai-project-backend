import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAiModelDto } from './dto/create-ai-model.dto';
import { UpdateAiModelDto } from './dto/update-ai-model.dto';
// import { AiModel } from '..ai-model/entities/ai-model.entity';
import { AiModel } from './entities/ai-model.entity';

@Injectable()
export class AiModelService {
  constructor(
    @InjectRepository(AiModel)
    private readonly aiModelRepository: Repository<AiModel>,
  ) {}

  async create(createAiModelDto: CreateAiModelDto): Promise<AiModel> {
    const transformedDto = {
      ...createAiModelDto,
      status: typeof createAiModelDto.status === 'boolean' 
        ? createAiModelDto.status ? 1 : 0 
        : createAiModelDto.status,
    };
    const aiModel = this.aiModelRepository.create(transformedDto);
    return this.aiModelRepository.save(aiModel);
  }

  async findAll(): Promise<AiModel[]> {
    return this.aiModelRepository.find();
  }

  async findOne(id: number): Promise<AiModel> {
    const aiModel = await this.aiModelRepository.findOne({ where: { id } });
    if (!aiModel) {
      throw new NotFoundException(`AiModel with ID ${id} not found`);
    }
    return aiModel;
  }

  async update(
    id: number,
    updateAiModelDto: UpdateAiModelDto,
  ): Promise<AiModel> {
    const transformedDto = {
      ...updateAiModelDto,
      status: typeof updateAiModelDto.status === 'boolean' 
        ? updateAiModelDto.status ? 1 : 0 
        : updateAiModelDto.status,
    };
    await this.aiModelRepository.update(id, transformedDto);
    const updatedAiModel = await this.aiModelRepository.findOne({
      where: { id },
    });
    if (!updatedAiModel) {
      throw new NotFoundException(`AiModel with ID ${id} not found`);
    }
    return updatedAiModel;
  }

  async remove(id: number): Promise<void> {
    const result = await this.aiModelRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`AiModel with ID ${id} not found`);
    }
  }
}