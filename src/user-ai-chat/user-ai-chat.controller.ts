import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserAiChatService } from './user-ai-chat.service';
import { CreateUserAiChatDto } from './dto/create-user-ai-chat.dto';
import { UpdateUserAiChatDto } from './dto/update-user-ai-chat.dto';

@Controller('user-ai-chat')
export class UserAiChatController {
  constructor(private readonly userAiChatService: UserAiChatService) {}

  @Post()
  create(@Body() createUserAiChatDto: CreateUserAiChatDto) {
    return this.userAiChatService.create(createUserAiChatDto);
  }

  @Get()
  findAll() {
    return this.userAiChatService.findAll();
  }

  @Get('userId/:userId/blockId/:blockId')
  findByUserBlockID(
    @Param('userId') userId: string,
    @Param('blockId') blockId: string,
  ) {
    return this.userAiChatService.findByUserBlockID(+userId, +blockId);
  }

  @Get('userId/:userId/phaseId/:phaseId')
  findByUserPhaseID(
    @Param('userId') userId: string,
    @Param('phaseId') phaseId: string,
  ) {
    return this.userAiChatService.findByUserPhaseID(+userId, +phaseId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userAiChatService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserAiChatDto: UpdateUserAiChatDto) {
    return this.userAiChatService.update(+id, updateUserAiChatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userAiChatService.remove(+id);
  }
}
