import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateQuoteDto } from './dto/create-quote.dto';
import { UpdateQuoteDto } from './dto/update-quote.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Quote } from './schema/quote.schema';
import { Model } from 'mongoose';
import { PaginationDto } from 'src/DTO/pagination.dto';
import { DEFAULT_PAGE_SIZE } from 'src/UTIL/common.constans';

@Injectable()
export class QuotesService {
  constructor(@InjectModel(Quote.name) private quoteModel: Model<Quote>) {}

  create(createQuoteDto: CreateQuoteDto) {
    return 'This action adds a new quote';
  }

  async findAll(paginationDto: PaginationDto) {
    const limit = paginationDto.limit;
    const skip = paginationDto.skip * limit;
    const quotes = await this.quoteModel.find().skip(skip).limit(limit);
    const total = await this.quoteModel.countDocuments();
    return {
      data: quotes,
      message: 'success',
      status: HttpStatus.OK,
      pageIndex: paginationDto.skip,
      pageSize: limit ?? DEFAULT_PAGE_SIZE,
      totalItems: total,
    };
  }

  async findOneById(id: string) {
    return await this.quoteModel.findById(id);
  }

  update(id: number, updateQuoteDto: UpdateQuoteDto) {
    return `This action updates a #${id} quote`;
  }

  remove(id: number) {
    return `This action removes a #${id} quote`;
  }
  // async createMany(createQuoteDtos: CreateQuoteDto[]) {
  //   const createQuotes = await this.quoteModel.insertMany(createQuoteDtos);
  //   return{
  //     createQuotes,
  //     length: createQuotes.length
  //   }
  // }
}
