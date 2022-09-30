import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Products, ProductsDocument } from './Schema/product.schema';

@Injectable()
export class ProductsService {

  constructor(@InjectModel(Products.name) private ProductsModel: Model<ProductsDocument>) {}

  async create(createProductDto: CreateProductDto): Promise<Products> {
    return new this.ProductsModel(createProductDto).save();
  }

  async findAll() {
    return this.ProductsModel.find();
  }

  findOne(name: string) {
    return this.ProductsModel.findOne({name});
  }

  update(name: string, updateProductDto: UpdateProductDto) {
    return this.ProductsModel.updateOne({name} , {$set: {...updateProductDto}});
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
