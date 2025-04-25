import { InjectRepository } from '@nestjs/typeorm';
import { PointOfInterest } from './entities/point-of-interest.entity';
import { Between, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { CreatePointOfInterestDto } from './dto/create-point-of-interest.dto';

@Injectable()
export class PointOfInterestRepository {
  constructor(
    @InjectRepository(PointOfInterest)
    private pointOfInterestRepository: Repository<PointOfInterest>,
  ) {}

  public async getAll(): Promise<PointOfInterest[]> {
    const pointsOfInterest = await this.pointOfInterestRepository.find();

    return pointsOfInterest;
  }

  public async getPointsOfInterestNearby(
    xMin: number,
    xMax: number,
    yMin: number,
    yMax: number,
  ): Promise<PointOfInterest[]> {
    const pointsOfInterest = await this.pointOfInterestRepository.find({
      where: {
        x: Between(xMin, xMax),
        y: Between(yMin, yMax),
      },
    });

    return pointsOfInterest;
  }

  public async create(
    pointOfInterest: CreatePointOfInterestDto,
  ): Promise<PointOfInterest> {
    const pointOfInterestCreated =
      this.pointOfInterestRepository.create(pointOfInterest);

    const pointOfInterestSaved = await this.pointOfInterestRepository.save(
      pointOfInterestCreated,
    );

    return pointOfInterestSaved;
  }
}
