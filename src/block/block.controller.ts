import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { BlockService } from './block.service';
import { Block } from './entities/block.entity';

@Controller('blocks')
export class BlockController {
  constructor(private readonly blockService: BlockService) {}

  @Post()
  create(@Body() block: Block): Promise<Block> {
    return this.blockService.create(block);
  }

  @Get()
  findAll(): Promise<Block[]> {
    return this.blockService.findAll();
  }

  @Get('getQuestionByBlock/:id')
  getQuesByBlock(@Param('id') id: number): Promise<Block> {
    return this.blockService.getQuesByBlock(id);
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Block> {
    return this.blockService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() block: Block): Promise<void> {
    return this.blockService.update(id, block);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.blockService.remove(id);
  }
}
