import { PartialType } from '@nestjs/mapped-types';
import { CreateUserAiChatDto } from './create-user-ai-chat.dto';

export class UpdateUserAiChatDto extends PartialType(CreateUserAiChatDto) {}
