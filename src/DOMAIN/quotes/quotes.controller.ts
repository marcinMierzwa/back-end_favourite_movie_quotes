import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { QuotesService } from './quotes.service';
import { CreateQuoteDto } from './dto/create-quote.dto';
import { UpdateQuoteDto } from './dto/update-quote.dto';
import { PaginationDto } from 'src/DTO/pagination.dto';

@Controller('quotes')
export class QuotesController {
  constructor(private readonly quotesService: QuotesService) {}

  @Post()
  create(@Body() createQuoteDto: CreateQuoteDto) {
    return this.quotesService.create(createQuoteDto);
  }

  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.quotesService.findAll(paginationDto);
  }

  @Get(':id')
   findOneById(@Param('id') id: string) {
     return  this.quotesService.findOneById(id);
  }


  @Patch(':id')
  update(@Param('id') id: string, @Body() updateQuoteDto: UpdateQuoteDto) {
    return this.quotesService.update(+id, updateQuoteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.quotesService.remove(+id);
  }

}
