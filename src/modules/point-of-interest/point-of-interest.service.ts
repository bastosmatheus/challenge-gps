import { Injectable } from '@nestjs/common';
import { CreatePointOfInterestDto } from './dto/create-point-of-interest.dto';
import { PointOfInterestRepository } from './point-of-interest.repository';

@Injectable()
export class PointOfInterestService {
  constructor(private pointOfInterestRepository: PointOfInterestRepository) {}

  public async create(createPointOfInterestDto: CreatePointOfInterestDto) {
    const pointOfInterest = await this.pointOfInterestRepository.create(
      createPointOfInterestDto,
    );

    return pointOfInterest;
  }

  public async getAll() {
    return this.pointOfInterestRepository.getAll();
  }

  public async getPointsOfInterestNearby(x: number, y: number, dMax: number) {
    const xMin = x - dMax;
    const xMax = x + dMax;
    const yMin = y - dMax;
    const yMax = y + dMax;

    const pointsOfInterest =
      await this.pointOfInterestRepository.getPointsOfInterestNearby(
        xMin,
        xMax,
        yMin,
        yMax,
      );

    return pointsOfInterest.filter((pointOfInterest) => {
      return Math.hypot(x - pointOfInterest.x, y - pointOfInterest.y) <= dMax;
    });
  }
}
