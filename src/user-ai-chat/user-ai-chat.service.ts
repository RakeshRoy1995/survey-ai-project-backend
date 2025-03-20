import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserAiChatDto } from './dto/create-user-ai-chat.dto';
import { UpdateUserAiChatDto } from './dto/update-user-ai-chat.dto';
import { UserAiChat } from './entities/user-ai-chat.entity';

@Injectable()
export class UserAiChatService {
  constructor(
    @InjectRepository(UserAiChat)
    private readonly userAiChatRepository: Repository<UserAiChat>,
  ) {}

  async create(createUserAiChatDto: CreateUserAiChatDto): Promise<UserAiChat> {
    const userAiChat = this.userAiChatRepository.create(createUserAiChatDto);
    return this.userAiChatRepository.save(userAiChat);
  }

  async findAll(): Promise<UserAiChat[]> {
    return this.userAiChatRepository.find();
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
