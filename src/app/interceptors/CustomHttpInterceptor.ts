import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpInterceptor, HttpResponse} from '@angular/common/http';
import {HttpRequest} from '@angular/common/http';
import {HttpHandler} from '@angular/common/http';
import {HttpEvent} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {SpinnerService} from '../services/spinner.service';

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {

  constructor(private spinnerService: SpinnerService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinnerService.requestStarted();

    return next
      .handle(req)
      .pipe(
        tap((event) => {
          if (event instanceof HttpResponse) {
            this.spinnerService.requestEnded();
          }
        }, (error) => {
          this.spinnerService.resetSpinner();
        })
      );
  }
}
