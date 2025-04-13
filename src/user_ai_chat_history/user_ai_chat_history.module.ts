import { Module } from '@nestjs/common';
import { UserAiChatHistoryService } from './user_ai_chat_history.service';
import { UserAiChatHistoryController } from './user_ai_chat_history.controller';

@Module({
  controllers: [UserAiChatHistoryController],
  providers: [UserAiChatHistoryService],
})
export class UserAiChatHistoryModule {}
