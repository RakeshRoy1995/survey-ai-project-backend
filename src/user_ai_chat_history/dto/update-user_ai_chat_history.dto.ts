import { PartialType } from '@nestjs/mapped-types';
import { CreateUserAiChatHistoryDto } from './create-user_ai_chat_history.dto';

export class UpdateUserAiChatHistoryDto extends PartialType(CreateUserAiChatHistoryDto) {}
