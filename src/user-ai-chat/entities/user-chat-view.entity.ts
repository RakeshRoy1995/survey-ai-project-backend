import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('user_chat_view', { synchronize: false }) // <-- Use synchronize: false to prevent migrations from running on views
export class UserChatView {
  @PrimaryColumn()
  userId: number;

  @PrimaryColumn()
  question_id: number;

  @Column()
  aiReply: string;

  @Column()
  status: string;

  @Column()
  blockId: number;

  @Column()
  ques_sort: number;

  @Column()
  block_sort: number;

  @Column()
  phaseId: number;

  @Column()
  question: string;

  @Column()
  conversetion_id: number;

  @Column()
  block_name: string;
}
