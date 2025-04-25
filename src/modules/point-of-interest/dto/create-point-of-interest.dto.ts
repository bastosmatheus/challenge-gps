import { z } from 'zod';

export const createPointOfInterestSchema = z.object({
  name: z.string({
    invalid_type_error: 'O nome do ponto de interesse deve ser uma string',
    required_error: 'Informe o nome do ponto de interesse ',
  }),
  x: z
    .number({
      invalid_type_error: 'A coordenada X deve ser um número',
      required_error: 'Informe a coordenada X',
    })
    .min(1, { message: 'Informe uma coordenada X válida' }),
  y: z
    .number({
      invalid_type_error: 'A coordenada Y deve ser um número',
      required_error: 'Informe a coordenada Y ',
    })
    .min(1, { message: 'Informe uma coordenada Y válida' }),
});

export type CreatePointOfInterestDto = z.infer<
  typeof createPointOfInterestSchema
>;
