import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CarsModule } from './cars/cars.module';

@Module({
  imports: [CatsModule,MongooseModule.forRoot('mongodb://localhost:27017/dbCads'), CarsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
