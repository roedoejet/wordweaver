import {
  HttpContextToken,
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from "@angular/common/http";
import { ErrorHandler, Injectable, Injector } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { tap } from "rxjs/operators";

export const SUPPRESS_ERROR = new HttpContextToken<boolean>(() => false);

/** Passes HttpErrorResponse to application-wide error handler */
@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private injector: Injector) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const suppressError = request.context.get(SUPPRESS_ERROR);
    return next.handle(request).pipe(
      tap({
        error: (err: any) => {
          if (suppressError) {
            // If the http context contains SUPPRESS_ERROR=true,
            // then just rethrow error to be catched locally
            return throwError(() => err);
          } else if (err instanceof HttpErrorResponse) {
            // Otherwise, handle the error with the global error handler
            const appErrorHandler = this.injector.get(ErrorHandler);
            appErrorHandler.handleError(err);
          }
        }
      })
    );
  }
}
