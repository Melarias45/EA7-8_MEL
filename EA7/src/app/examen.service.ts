import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ExamenService {
  apiUrl = "https://qapi.vercel.app/api/random";

  constructor(private http: HttpClient) { }

  getlistInfo(): Observable<any> {
    return this.http.get(this.apiUrl);
  }


}
