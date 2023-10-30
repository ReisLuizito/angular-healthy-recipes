import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RandomRecipesService {

  constructor(private http: HttpClient) {}

  listRandomFood(take: number) {
    const apiUrl = `https://api.spoonacular.com/recipes/random?apiKey=7afc5d69ab0c4f7ba482fb310f5f4c24&number=${take}`;

    return this.http.get(apiUrl);
  }
}
