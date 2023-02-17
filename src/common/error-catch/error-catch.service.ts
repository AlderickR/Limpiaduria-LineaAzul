import {
  ConflictException,
  HttpException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';

import { EExceptionsOptions } from '../interfaces';
import { IParamsExceptionsOptions } from '../interfaces/paramsExceptionsOptiones.interface';

@Injectable()
export class ErrorCatchService {
  notExitsCatch(module?: string): HttpException {
    throw new ConflictException(`${module} was not found`);
  }

  exceptionsOptions({ message }: IParamsExceptionsOptions): HttpException {
    switch (message) {
      case EExceptionsOptions.notFoundClient:
        return this.notExitsCatch('Client');
      case EExceptionsOptions.notFoundGarment:
        return this.notExitsCatch('Garment');
      case EExceptionsOptions.notFoundNote:
        return this.notExitsCatch('Note');

      default:
        throw new InternalServerErrorException(message);
    }
  }
}
