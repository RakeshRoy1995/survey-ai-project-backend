import { Injectable , Inject} from '@nestjs/common';
import {
  CacheModule,
  CacheInterceptor,
  CACHE_MANAGER,
  Cache,
} from '@nestjs/cache-manager';
@Injectable()
export class AppService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}
  async getHello(): Promise<string> {
    await this.cacheManager.set('key', 'value');
    const value = await this.cacheManager.get('key') as string;
    return 'Hello World !!!';
  }
}
