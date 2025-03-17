import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  allowAccess: boolean = false;

  constructor(private http: HttpClient) {
  }

  apiUrl(plateType: string): string {
    return `https://forkify-api.herokuapp.com/api/search?q=${plateType}`;
  }

  getData(plateType: string): Observable<any> {
    return this.http.get<any>(this.apiUrl(plateType));
  }

  searchUrl(id: string): string {
    return `https://forkify-api.herokuapp.com/api/get?rId=${id}`;
  }

  getRecipeDetails(id: string): Observable<any> {
    return this.http.get(this.searchUrl(id));
  }
}
