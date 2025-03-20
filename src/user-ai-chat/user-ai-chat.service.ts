import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Repository } from 'typeorm';
import { CreateUserAiChatDto } from './dto/create-user-ai-chat.dto';
import { UpdateUserAiChatDto } from './dto/update-user-ai-chat.dto';
import { UserAiChat } from './entities/user-ai-chat.entity';

@Injectable()
export class UserAiChatService {
  constructor(
    @InjectRepository(UserAiChat)
    private readonly userAiChatRepository: Repository<UserAiChat>,
    private readonly dataSource: DataSource,
  ) {}

  async create(createUserAiChatDto: CreateUserAiChatDto): Promise<UserAiChat> {
    const userAiChat = this.userAiChatRepository.create(createUserAiChatDto);
    return this.userAiChatRepository.save(userAiChat);
  }

  async findAll(): Promise<UserAiChat[]> {
    return this.userAiChatRepository.find();
  }

  async findByUserBlockID(
    userId: number,
    blockId: number,
  ): Promise<UserAiChat[]> {
    const result = await this.dataSource.query(
      `SELECT  t1.yourMessage , t1.aiReply , t1.saved , t2.question , t2.blockId, t3.name as block_name
       FROM useraichats t1
       JOIN questions t2 ON t1.question_id = t2.id
       JOIN blocks t3 ON t3.id = t2.blockId
       WHERE t2.blockId = ? and t1.userId = ?`,
      [blockId, userId],
    );
    return result;
  }

  async findByUserPhaseID(
    userId: number,
    phaseId: number,
  ): Promise<UserAiChat[]> {
    const result = await this.dataSource.query(
      `SELECT  t1.yourMessage , t1.aiReply , t1.saved , t2.blockId, t3.phaseId, t2.question , t3.name as block_name
       FROM useraichats t1
       JOIN questions t2 ON t1.question_id = t2.id
       JOIN blocks t3 ON t3.id = t2.blockId
       WHERE t1.userId = ?`,
      [userId],
    );

    console.log(`result`, result);
    return result;
  }

  async findOne(id: any): Promise<UserAiChat> {
    const userAiChat = await this.userAiChatRepository.findOne(id);
    if (!userAiChat) {
      throw new NotFoundException('UserAiChat not found');
    }
    return userAiChat;
  }

  async update(
    id: any,
    updateUserAiChatDto: UpdateUserAiChatDto,
  ): Promise<UserAiChat> {
    await this.userAiChatRepository.update(id, updateUserAiChatDto);
    const userAiChat = await this.userAiChatRepository.findOne(id);
    if (!userAiChat) {
      throw new NotFoundException('UserAiChat not found');
    }
    return userAiChat;
  }

  async remove(id: number): Promise<void> {
    await this.userAiChatRepository.delete(id);
  }
}
