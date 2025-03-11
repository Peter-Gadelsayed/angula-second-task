import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) {
  }

  apiUrl = 'https://forkify-api.herokuapp.com/api/search?q=pizza';

  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  pastaUrl = 'https://forkify-api.herokuapp.com/api/search?q=pasta';

  getPastaData(): Observable<any> {
    return this.http.get<any>(this.pastaUrl);
  }

  searchUrl(id: string): string {
    return `https://forkify-api.herokuapp.com/api/get?rId=${id}`;
  }

  getRecipeDetails(id: string): Observable<any> {
    return this.http.get(this.searchUrl(id));
  }
}
