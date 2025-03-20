export class CreateUserAiChatDto {
  id?: number;
  userId: number;
  question_id: number;
  yourMessage: string;
  aiReply: string;
  saved: boolean;
  created_at?: Date;
}
