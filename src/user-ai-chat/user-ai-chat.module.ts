import { Module } from '@nestjs/common';
import { UserAiChatService } from './user-ai-chat.service';
import { UserAiChatController } from './user-ai-chat.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserAiChat } from './entities/user-ai-chat.entity';
import { UserChatView } from './entities/user-chat-view.entity';
import { UserAiChatHistory } from './entities/user_ai_chat_history.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserAiChat, UserAiChatHistory, UserChatView]),
  ],
  controllers: [UserAiChatController],
  providers: [UserAiChatService],
})
export class UserAiChatModule {}
