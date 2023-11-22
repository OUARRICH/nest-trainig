import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getAllCats(): string {
    return 'All cats!';
  }
}
