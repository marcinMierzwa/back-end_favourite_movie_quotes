import { Injectable } from '@nestjs/common';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Character } from './schema/character.schema';

@Injectable()
export class CharactersService {

  constructor(@InjectModel(Character.name) private characterModel: Model<Character>) {}


  async create(createCharacterDto: CreateCharacterDto) {
    const createdCharater = await this.characterModel.create(createCharacterDto);
    return {
      createdCharater,
      message: 'character created succesful'
    }
  }

  findAll() {
    return `This action returns all characters`;
  }

  findOne(id: number) {
    return `This action returns a #${id} character`;
  }

  update(id: number, updateCharacterDto: UpdateCharacterDto) {
    return `This action updates a #${id} character`;
  }

  remove(id: number) {
    return `This action removes a #${id} character`;
  }
}
