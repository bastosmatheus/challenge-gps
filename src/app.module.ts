import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PointOfInterest } from './modules/point-of-interest/entities/point-of-interest.entity';
import { PointOfInterestModule } from './modules/point-of-interest/point-of-interest.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'challenge_gps',
      entities: [PointOfInterest],
      migrations: [__dirname + '/database/migrations/**.ts'],
      synchronize: false,
    }),
    PointOfInterestModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
