import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cat } from './cats.schema';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

@Injectable()
export class CatsService {
  constructor(@InjectModel(Cat.name) private catModel: Model<Cat>) {}

  async create(createCatDto: CreateCatDto): Promise<Cat> {
    const createdCat = new this.catModel(createCatDto);
    return createdCat.save();
  }

  async findAll(): Promise<Cat[]> {
    return this.catModel.find().exec();
  }

  async findOne(id:string): Promise<Cat> {
    return this.catModel.findById(id).exec();
  }
  
  async update(id: string, updateCatDto: UpdateCatDto): Promise<Cat> {
    const cat = await this.catModel.findByIdAndUpdate(id, updateCatDto, { new: true });

    // if (!cat) {
    //   throw new NotFoundException(`Cat with id ${id} not found`);
    // }
    return cat;
  }

  async remove(id: string) {
    const cat = await this.catModel.findByIdAndDelete(id);

    // if (!cat) {
    //   throw new NotFoundException(`Cat with id ${id} not found`);
    // }

    return cat;
  }
}

