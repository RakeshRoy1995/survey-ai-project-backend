import { Injectable } from '@nestjs/common';
import { InjectRepository, getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { Question } from './entities/question.entity';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question)
    private questionRepository: Repository<Question>,
  ) {}

  async create(createQuestionDto: CreateQuestionDto): Promise<Question> {
    const question = this.questionRepository.create(createQuestionDto);
    return this.questionRepository.save(question);
  }

  async findAll(): Promise<Question[]> {
    
    return this.questionRepository.find();
  }

  async findOne(id: number): Promise<Question> {
    const question = await this.questionRepository.findOne({ where: { id } });
    if (!question) {
      throw new Error(`Question with id ${id} not found`);
    }
    return question;
  }

  async update(id: any, updateQuestionDto: UpdateQuestionDto): Promise<Question> {
    await this.questionRepository.update(id, { ...updateQuestionDto });
    const question = await this.questionRepository.findOne(id);
    if (!question) {
      throw new Error(`Question with id ${id} not found`);
    }
    return question;
  }

  async remove(id: number): Promise<void> {
    await this.questionRepository.delete(id);
  }
}
