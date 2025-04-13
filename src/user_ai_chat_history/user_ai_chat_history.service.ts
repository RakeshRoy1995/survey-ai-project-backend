import { Injectable } from '@nestjs/common';
import { CreateUserAiChatHistoryDto } from './dto/create-user_ai_chat_history.dto';
import { UpdateUserAiChatHistoryDto } from './dto/update-user_ai_chat_history.dto';

@Injectable()
export class UserAiChatHistoryService {
  create(createUserAiChatHistoryDto: CreateUserAiChatHistoryDto) {
    return 'This action adds a new userAiChatHistory';
  }

  findAll() {
    return `This action returns all userAiChatHistory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userAiChatHistory`;
  }

  update(id: number, updateUserAiChatHistoryDto: UpdateUserAiChatHistoryDto) {
    return `This action updates a #${id} userAiChatHistory`;
  }

  remove(id: number) {
    return `This action removes a #${id} userAiChatHistory`;
  }
}
