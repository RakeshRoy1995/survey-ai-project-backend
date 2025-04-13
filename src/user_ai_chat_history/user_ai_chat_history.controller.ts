import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserAiChatHistoryService } from './user_ai_chat_history.service';
import { CreateUserAiChatHistoryDto } from './dto/create-user_ai_chat_history.dto';
import { UpdateUserAiChatHistoryDto } from './dto/update-user_ai_chat_history.dto';

@Controller('user-ai-chat-history')
export class UserAiChatHistoryController {
  constructor(private readonly userAiChatHistoryService: UserAiChatHistoryService) {}

  @Post()
  create(@Body() createUserAiChatHistoryDto: CreateUserAiChatHistoryDto) {
    return this.userAiChatHistoryService.create(createUserAiChatHistoryDto);
  }

  @Get()
  findAll() {
    return this.userAiChatHistoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userAiChatHistoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserAiChatHistoryDto: UpdateUserAiChatHistoryDto) {
    return this.userAiChatHistoryService.update(+id, updateUserAiChatHistoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userAiChatHistoryService.remove(+id);
  }
}
