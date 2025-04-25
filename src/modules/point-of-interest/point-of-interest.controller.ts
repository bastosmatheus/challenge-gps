import {
  Controller,
  Get,
  Post,
  Body,
  Query,
  ParseIntPipe,
  UsePipes,
} from '@nestjs/common';
import { PointOfInterestService } from './point-of-interest.service';
import {
  CreatePointOfInterestDto,
  createPointOfInterestSchema,
} from './dto/create-point-of-interest.dto';
import { ZodValidationPipe } from 'src/pipes/zod-validation.pipe';

@Controller('points-of-interest')
export class PointOfInterestController {
  constructor(
    private readonly pointOfInterestService: PointOfInterestService,
  ) {}

  @Post()
  @UsePipes(new ZodValidationPipe(createPointOfInterestSchema))
  public async create(
    @Body()
    createPointOfInterestDto: CreatePointOfInterestDto,
  ) {
    const pointOfInterest = await this.pointOfInterestService.create(
      createPointOfInterestDto,
    );

    return pointOfInterest;
  }

  @Get()
  public async getAll() {
    return await this.pointOfInterestService.getAll();
  }

  @Get('nearby')
  public async getPointsOfInterestNearby(
    @Query('x', ParseIntPipe) x: number,
    @Query('y', ParseIntPipe) y: number,
    @Query('dmax', ParseIntPipe) dMax: number,
  ) {
    const pointsOfInterest =
      await this.pointOfInterestService.getPointsOfInterestNearby(x, y, dMax);

    return pointsOfInterest;
  }
}
