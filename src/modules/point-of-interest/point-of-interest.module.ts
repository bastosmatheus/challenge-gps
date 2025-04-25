import { Module } from '@nestjs/common';
import { PointOfInterestService } from './point-of-interest.service';
import { PointOfInterestController } from './point-of-interest.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PointOfInterest } from './entities/point-of-interest.entity';
import { PointOfInterestRepository } from './point-of-interest.repository';

@Module({
  imports: [TypeOrmModule.forFeature([PointOfInterest])],
  controllers: [PointOfInterestController],
  providers: [
    PointOfInterestService,
    PointOfInterestRepository,
    PointOfInterestService,
  ],
})
export class PointOfInterestModule {}
