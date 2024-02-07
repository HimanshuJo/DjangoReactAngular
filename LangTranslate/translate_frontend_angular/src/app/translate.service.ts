import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {

  private apiUrl='http://127.0.0.1:8000/api/translate/';

  constructor(private http: HttpClient) { }

  translate(originalText: string): Observable<any>{
    return this.http.post(this.apiUrl, {originalText: originalText});
  }
}
