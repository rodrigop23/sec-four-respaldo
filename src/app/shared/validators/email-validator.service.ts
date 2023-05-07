import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { Observable, delay, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EmailValidatorService implements AsyncValidator {
  constructor() {}

  validate(
    control: AbstractControl<any, any>
  ): Observable<ValidationErrors | null> {
    const email = control.value;

    const httpCallObversable = new Observable<ValidationErrors | null>(
      (subscriber) => {
        console.log(email);

        if (email === 'rodrigop_23@outlook.es') {
          subscriber.next({ emailTaken: true });
          subscriber.complete();
          return;
        }

        subscriber.next(null);
        subscriber.complete();
      }
    ).pipe(delay(3000));

    return httpCallObversable;
  }

  // validate(
  //   control: AbstractControl<any, any>
  // ): Observable<ValidationErrors | null> {
  //   const email = control.value;

  //   console.log(email);

  //   return of({ emailTaken: true }).pipe(delay(2000));
  // }

  // return this.http.get<any[]>(`http://localhost:3000/usuarios?q=${email}`).pipe(
  //   delay(3000),
  //   map((resp) => {
  //     return resp.length === 0 ? null : { emailTaken: true };
  //   }
}
