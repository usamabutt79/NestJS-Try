import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductsDocument = Products & Document;

@Schema()
export class Products {
  @Prop()
  name: string;

  @Prop()
  price: number;

  @Prop()
  quantity: number;
}

export const ProductsSchema = SchemaFactory.createForClass(Products);