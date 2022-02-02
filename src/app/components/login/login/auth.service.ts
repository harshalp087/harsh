import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import { throwError } from 'rxjs';
import {map,catchError} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor() { }
}
