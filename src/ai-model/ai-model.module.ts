import { Module } from '@nestjs/common';
import { AiModelService } from './ai-model.service';
import { AiModelController } from './ai-model.controller';
import { AiModel } from './entities/ai-model.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([AiModel])],
  controllers: [AiModelController],
  providers: [AiModelService],
})
export class AiModelModule {}
