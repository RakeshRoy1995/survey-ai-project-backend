import { Test, TestingModule } from '@nestjs/testing';
import { UserAiChatHistoryController } from './user_ai_chat_history.controller';
import { UserAiChatHistoryService } from './user_ai_chat_history.service';

describe('UserAiChatHistoryController', () => {
  let controller: UserAiChatHistoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserAiChatHistoryController],
      providers: [UserAiChatHistoryService],
    }).compile();

    controller = module.get<UserAiChatHistoryController>(UserAiChatHistoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
