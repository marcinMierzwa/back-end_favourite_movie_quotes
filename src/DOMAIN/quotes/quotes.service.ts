import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateQuoteDto } from './dto/create-quote.dto';
import { UpdateQuoteDto } from './dto/update-quote.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Quote } from './schema/quote.schema';
import { Model } from 'mongoose';
import { DEFAULT_PAGE_SIZE } from 'src/UTIL/common.constans';
import { GetQuotesDto } from 'src/DTO/get-quotes.dto';

@Injectable()
export class QuotesService {
  constructor(@InjectModel(Quote.name) private quoteModel: Model<Quote>) {}

  create(createQuoteDto: CreateQuoteDto) {
    return 'This action adds a new quote';
  }

  async findAll(getQuotesDto: GetQuotesDto) {
    const { limit = 3, skip = 0, search } = getQuotesDto;
    const filter: any = {};
  
    if (search) {
      filter.dialog = new RegExp(`^${search}`, 'i');
        }
    console.log('Filter:', filter); // Wyświetli, jaki filtr jest tworzony
console.log('Skip:', skip, 'Limit:', limit); 
  
    const quotes = await this.quoteModel.find(filter).skip(skip * limit).limit(limit);
    const total = await this.quoteModel.countDocuments(filter);
    const message = total === 0 ? 'No results found' : 'success';
    return {
      data: quotes,
      message: message,
      pageIndex: getQuotesDto.skip,
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
