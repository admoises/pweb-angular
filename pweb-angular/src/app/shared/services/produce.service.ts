import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { ChangePasswordRequest } from '../interfaces/change-password-request';
import { LoginRequest } from '../interfaces/login-request';
import { NewUserRequest } from '../interfaces/new-user-request';
import { SendRecoveryPasswordEmailRequest } from '../interfaces/send-password-recovery-email-req';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getById(id: number): Observable<Object> {
    return this.http
      .get(environment.API + '/produto/' + id)
      .pipe(take(1));
  }

  getProductsInDestaque(): Observable<Object> {
    return this.http
      .get(environment.API + '/produto/destaque')
      .pipe(take(1));
  }

}
