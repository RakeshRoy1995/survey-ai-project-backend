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
      return updatedRecord;
    } else {
      const userAiChat = this.userAiChatRepository.create(createUserAiChatDto);
      return this.userAiChatRepository.save(userAiChat);
    }
  }

  async findAll(): Promise<UserAiChat[]> {
    return this.userAiChatRepository.find();
  }

  async findByUserBlockID(
    userId: number,
    blockId: number,
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
  ): Promise<UserAiChat[]> {
    const result = await this.dataSource.query(
      `SELECT * 
      FROM user_chat_view 
      WHERE userId = ? and phaseId = ?`,
      [userId , phaseId],
    );

    console.log(`result`, result, userId);
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
