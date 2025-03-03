import { Module } from '@nestjs/common';
import { PickService } from '../pick/pick.service';

@Module({
  providers: [PickService],
  exports: [PickService], // Export to use in other modules
})
export class CommonModule {}
