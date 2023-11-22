import { Controller, Get, Req, Post, HttpCode, Header, Res, Redirect, Query, Param, Body } from '@nestjs/common';
import { Request, Response } from 'express';
import { AppService } from './app.service';
import CreateCatDto from "./dto/create-cat.dto";

@Controller('cats')
export class CatsController {
  // constructor(private readonly appService: AppService) {}

  @Post()
  @HttpCode(204)
  create(@Body() body: CreateCatDto): string {
    return `this action creates a cat: ${JSON.stringify(body)}`;
  }

  @Get(':id')
  // @Redirect('https://nestjs.com', 301)
  //@Header('cache-control', 'none')
  getAll(@Query('e') e, @Param('id') id: string): {url: string} {
    //es.header('Nappi', 'none').end("this action returns all cats");
    if(e && e == 5 || id === "1") {
      return { url : 'https://docs.nestjs.com/v5/'};
    }
    return {url : "this action returns all cats" };
  }
}
