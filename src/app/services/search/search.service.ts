import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) {}

  search(query: string) {
    const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=7afc5d69ab0c4f7ba482fb310f5f4c24&query=${query}&number=10`;

    return this.http.get(apiUrl);
  }
}
