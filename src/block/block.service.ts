import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { Block } from './entities/block.entity';

@Injectable()
export class BlockService {
  constructor(
    @InjectRepository(Block)
    private blockRepository: Repository<Block>,
    private readonly dataSource: DataSource,
  ) {}

  create(block: Block): Promise<Block> {
    return this.blockRepository.save(block);
  }

  findAll(): Promise<Block[]> {
    return this.blockRepository.find();
  }

  findOne(id: any): Promise<Block> {
    return this.blockRepository.findOne(id).then((block) => {
      if (!block) {
        throw new Error('Block not found');
      }
      return block;
    });
  }

  async getQuesByBlock(id: any): Promise<Block> {
    const result = await this.dataSource.query(
      `SELECT t1.*
         FROM questions t1
         JOIN blocks t2 ON t1.blockId = t2.id
         WHERE t2.id = ?`,
      [id],
    );
    return result;
  }

  update(id: number, block: Block): Promise<void> {
    return this.blockRepository.update(id, block).then(() => undefined);
  }

  remove(id: number): Promise<void> {
    return this.blockRepository.delete(id).then(() => undefined);
  }
}
