import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SingleRecipeService {

  constructor(private http: HttpClient) {}
  takeRecipe(id: number) {
    const apiUrl = `https://api.spoonacular.com/recipes/${id}/information?apiKey=7afc5d69ab0c4f7ba482fb310f5f4c24`
    return this.http.get(apiUrl);
  }

  takeSimilarRecipe(id: number) {
    const apiUrl = `https://api.spoonacular.com/recipes/${id}/similar?apiKey=7afc5d69ab0c4f7ba482fb310f5f4c24`
    return this.http.get(apiUrl);
  }
}
