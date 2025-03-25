import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SummaryOutputPhaseService } from './summary-output-phase.service';
import { CreateSummaryOutputPhaseDto } from './dto/create-summary-output-phase.dto';
import { UpdateSummaryOutputPhaseDto } from './dto/update-summary-output-phase.dto';

@Controller('summary-output-phase')
export class SummaryOutputPhaseController {
  constructor(private readonly summaryOutputPhaseService: SummaryOutputPhaseService) {}

  @Post()
  create(@Body() createSummaryOutputPhaseDto: CreateSummaryOutputPhaseDto) {
    return this.summaryOutputPhaseService.create(createSummaryOutputPhaseDto);
  }

  @Get()
  findAll() {
    return this.summaryOutputPhaseService.findAll();
  }

  @Get('phase-userId/:id/:userId')
  findAllByPhaseId(@Param('id') id: string, @Param('userId') userId: string) {
    return this.summaryOutputPhaseService.findAllByPhaseId(id, userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.summaryOutputPhaseService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSummaryOutputPhaseDto: UpdateSummaryOutputPhaseDto) {
    return this.summaryOutputPhaseService.update(+id, updateSummaryOutputPhaseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.summaryOutputPhaseService.remove(+id);
  }
}
