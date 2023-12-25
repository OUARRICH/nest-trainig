import { Controller, Get,Post, HttpCode, Query, Param, Body } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CatsService } from './cats.service';
import CreateCatDto from "./dto/create-cat.dto";
import { Cat } from './interfaces/cat.interface';
import { CatEntity } from './entities/cat.entity';

@ApiBearerAuth()
@ApiTags('cats')
@Controller('cats')
export class CatsController {
  constructor(private catsService : CatsService){}

  @Post()
  @HttpCode(204)
  @ApiOperation({ summary: 'Create cat' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async create(@Body() body: CreateCatDto) {
    this.catsService.create(body);
    return `this action creates a cat: ${JSON.stringify(body)}`;
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: CatEntity,
  })
  async getAll(): Promise<Cat[]> {
    return this.catsService.findAll()
  }
}
