import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  allowAccess: boolean = false;

  constructor(private http: HttpClient) {
  }
  private baseUrl = environment.baseUrl;

  apiUrl(plateType: string): string {
    return `${this.baseUrl}/search?q=${plateType}`;
  }

  getData(plateType: string): Observable<any> {
    return this.http.get<any>(this.apiUrl(plateType));
  }

  searchUrl(id: string): string {
    return `${this.baseUrl}/get?rId=${id}`;
  }

  getRecipeDetails(id: string): Observable<any> {
    return this.http.get(this.searchUrl(id));
  }
}
