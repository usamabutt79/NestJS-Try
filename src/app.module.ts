import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { BreedsController } from './breeds/breeds.controller';
import { Breeds } from './breeds';

@Module({

  imports: [ProductsModule, MongooseModule.forRoot('mongodb+srv://usamabutt786:18134156-079@cluster0.ajmez0k.mongodb.net/Nest_Practice')],
  controllers: [AppController, BreedsController],
  providers: [AppService, Breeds],
})
export class AppModule {}
