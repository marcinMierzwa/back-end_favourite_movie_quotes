import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Movie } from './schema/movie.schema';
import { Model } from 'mongoose';

@Injectable()
export class MoviesService {
  
  constructor(@InjectModel(Movie.name) private movieModel: Model<Movie>) {}

  async create(createMovieDto: CreateMovieDto) {
    const movie = await this.movieModel.create(createMovieDto);
    return {
      movie,
      message: "movie created successful"
    }
  }

  findAll() {
    return `This action returns all movies`;
  }

  async findOne(id: string) {
    const movieById = await this.movieModel.findById(id);
    return {
      movieById
    }
  }

  update(id: number, updateMovieDto: UpdateMovieDto) {
    return `This action updates a #${id} movie`;
  }

  remove(id: number) {
    return `This action removes a #${id} movie`;
  }
}
