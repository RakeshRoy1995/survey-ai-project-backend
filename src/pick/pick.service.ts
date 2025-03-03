import { Injectable } from '@nestjs/common';

@Injectable()
export class PickService {
  pick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
    return keys.reduce(
      (acc, key) => {
        acc[key] = obj[key];
        return acc;
      },
      {} as Pick<T, K>,
    );
  }
}
