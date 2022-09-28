import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';

/**
 * Response Interceptor - to overwrite the success message
 */
@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> {
    let statusCode = context.switchToHttp().getResponse().statusCode;
    let response = next.handle().pipe(
      map((data) => {
        return {
          statusCode,
          data,
          errorMessage: null,
        };
      }),
    );

    return response;
  }
}
