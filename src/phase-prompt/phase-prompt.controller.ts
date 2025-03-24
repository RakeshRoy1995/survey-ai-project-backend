import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PhasePromptService } from './phase-prompt.service';
import { CreatePhasePromptDto } from './dto/create-phase-prompt.dto';
import { UpdatePhasePromptDto } from './dto/update-phase-prompt.dto';

@Controller('phase-prompt')
export class PhasePromptController {
  constructor(private readonly phasePromptService: PhasePromptService) {}

  @Post()
  create(@Body() createPhasePromptDto: CreatePhasePromptDto) {
    return this.phasePromptService.create(createPhasePromptDto);
  }

  @Get()
  findAll() {
    return this.phasePromptService.findAll();
  }

  @Get('prompt/:id')
  findAllByPhaseId(@Param('id') id: string) {
    return this.phasePromptService.findAllByPhaseId(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.phasePromptService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePhasePromptDto: UpdatePhasePromptDto) {
    return this.phasePromptService.update(+id, updatePhasePromptDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.phasePromptService.remove(+id);
  }
}
