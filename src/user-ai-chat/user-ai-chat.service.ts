import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Repository } from 'typeorm';
import { CreateUserAiChatDto } from './dto/create-user-ai-chat.dto';
import { UpdateUserAiChatDto } from './dto/update-user-ai-chat.dto';
import { UserAiChat } from './entities/user-ai-chat.entity';
import { UserChatView } from './entities/user-chat-view.entity';
import { UserAiChatHistory } from './entities/user_ai_chat_history.entity';

@Injectable()
export class UserAiChatService {
  constructor(
    @InjectRepository(UserAiChat)
    private readonly userAiChatRepository: Repository<UserAiChat>,
    @InjectRepository(UserAiChatHistory)
    private readonly userAiChatHistoryRepository: Repository<UserAiChatHistory>,
    private readonly dataSource: DataSource,
    @InjectRepository(UserChatView)
    private readonly userChatViewRepository: Repository<UserChatView>,
  ) {}

  async createUserChatView() {
    const query = `
      CREATE VIEW user_chat_view AS
      SELECT  
          t1.aiReply, 
          t1.userId, 
          t1.status, 
          t2.blockId, 
          t2.sort as ques_sort, 
          t3.sort as block_sort, 
          t3.phaseId, 
          t2.question, 
          t1.question_id,
          t1.conversetion_id,
          t3.name AS block_name
      FROM 
          useraichats t1
      JOIN 
          questions t2 ON t1.question_id = t2.id
      JOIN 
          blocks t3 ON t3.id = t2.blockId;
    `;

    await this.dataSource.query(query);
    console.log('User chat view created successfully');
  }

  async create(createUserAiChatDto: CreateUserAiChatDto): Promise<UserAiChat> {
    const existingRecord = await this.userAiChatRepository.findOne({
      where: {
        userId: createUserAiChatDto.userId,
        question_id: createUserAiChatDto.question_id,
      },
    });

    if (existingRecord) {
      await this.userAiChatRepository.update(
        existingRecord.id,
        createUserAiChatDto,
      );
      const updatedRecord = await this.userAiChatRepository.findOneBy({
        id: existingRecord.id,
      });
      if (!updatedRecord) {
        throw new NotFoundException('UserAiChat not found after update');
      }
      await this.userAiChatHistoryRepository.save(createUserAiChatDto);
      return updatedRecord;
    } else {
      const userAiChat = this.userAiChatRepository.create(createUserAiChatDto);
      await this.userAiChatHistoryRepository.save(userAiChat);
      return this.userAiChatRepository.save(userAiChat);
    }
  }

  async findAll(): Promise<UserAiChat[]> {
    return this.userAiChatRepository.find();
  }

  async findByUserBlockID(
    userId: number,
    blockId: number
  ): Promise<UserAiChat[]> {
    const result = await this.dataSource.query(
      `SELECT * 
      FROM user_chat_view 
      WHERE userId = ? and blockId = ?`,
      [userId, blockId],
    );
    return result;
  }


  async findByUserPhaseID(
    userId: number,
    phaseId: number,
  ): Promise<UserChatView[]> {
    console.log(`1`, 1);
    return this.userChatViewRepository.find({
      where: { userId, phaseId },
      order: { block_sort: 'DESC', ques_sort: 'DESC' },
    });
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
