import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesModule } from './movies/movies.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MoviesModule,
    MongooseModule.forRoot('mongodb://mih777:mih777@ds129010.mlab.com:29010/nest'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
