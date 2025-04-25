import {
  BadRequestException,
  InternalServerErrorException,
  PipeTransform,
} from '@nestjs/common';
import { ZodError, ZodSchema } from 'zod';

export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodSchema) {}

  public transform(value: unknown) {
    try {
      return this.schema.parse(value);
    } catch (error: unknown) {
      if (error instanceof ZodError) {
        const message = error.errors[0].message;

        console.log(error);

        throw new BadRequestException(message);
      }

      throw new InternalServerErrorException();
    }
  }
}
