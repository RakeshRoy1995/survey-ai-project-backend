import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { PhaseService } from './phase.service';
import { Phase } from './entities/phase.entity';
import { GetBlockDto } from './dto/get-block.dto';

@Controller('phases')
export class PhaseController {
  constructor(private readonly phaseService: PhaseService) {}

  @Post()
  create(@Body() phase: Phase): Promise<Phase> {
    return this.phaseService.create(phase);
  }

  @Post('get-block-by-phaseid')
  getBlockByPhaseID(@Body() phase: GetBlockDto): Promise<Phase[]> {
    return this.phaseService.getBlockByPhaseID(phase);
  }

  @Post('get-question-by-phaseid')
  getQuestionByPhaseID(@Body() phase: GetBlockDto): Promise<Phase[]> {
    return this.phaseService.getQuestionByPhaseID(phase);
  }

  @Get()
  findAll(): Promise<Phase[]> {
    return this.phaseService.findAll();
  }

  @Get('getBlockByPhaseId/:id')
  getBlockByPhaseId(@Param('id') id: any): Promise<any> {
    return this.phaseService.getBlockByPhase(id);
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Phase> {
    return this.phaseService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() phase: Phase): Promise<void> {
    return this.phaseService.update(id, phase);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.phaseService.remove(id);
  }
}


