import { Controller, Get,Post, HttpCode, Query, Param, Body } from '@nestjs/common';
import { CatsService } from './cats.service';
import CreateCatDto from "./dto/create-cat.dto";
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private catsService : CatsService){}

  @Post()
  @HttpCode(204)
  async create(@Body() body: CreateCatDto) {
    this.catsService.create(body);
    return `this action creates a cat: ${JSON.stringify(body)}`;
  }

  @Get()
  async getAll(): Promise<Cat[]> {
    return this.catsService.findAll()
  }
}
