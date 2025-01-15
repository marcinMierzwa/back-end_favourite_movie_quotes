import { Injectable } from '@nestjs/common';
import { CreateQuoteDto } from './dto/create-quote.dto';
import { UpdateQuoteDto } from './dto/update-quote.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Quote } from './schema/quote.schema';
import { Model } from 'mongoose';

@Injectable()
export class QuotesService {

  constructor(@InjectModel(Quote.name) private quoteModel: Model<Quote>) {}

  create(createQuoteDto: CreateQuoteDto) {
    return 'This action adds a new quote';
  }

  findAll() {
    return `This action returns all quotes`;
  }

  async findOneById(id: string) {
    const quote = await this.quoteModel.findById(id);
    return {
      quote,
      message: 'quote finded succesfully'
    };
  }

  update(id: number, updateQuoteDto: UpdateQuoteDto) {
    return `This action updates a #${id} quote`;
  }

  remove(id: number) {
    return `This action removes a #${id} quote`;
  }

}
