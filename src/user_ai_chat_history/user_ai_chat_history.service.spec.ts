import { Test, TestingModule } from '@nestjs/testing';
import { UserAiChatHistoryService } from './user_ai_chat_history.service';

describe('UserAiChatHistoryService', () => {
  let service: UserAiChatHistoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserAiChatHistoryService],
    }).compile();

    service = module.get<UserAiChatHistoryService>(UserAiChatHistoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
