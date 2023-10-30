import { Component, Input } from '@angular/core';
import { finalize } from 'rxjs';
import { SingleRecipeService } from 'src/app/services/single-recipe/single-recipe.service';

@Component({
  selector: 'app-similar-recipes',
  templateUrl: './similar-recipes.component.html',
  styleUrls: ['./similar-recipes.component.css']
})
export class SimilarRecipesComponent {
  public similarRecipes: any = [];
  public loading = true;

  @Input() recipeIdSimilar!: number;

  constructor(private service: SingleRecipeService) {}

  ngOnInit(): void {
    this.takeSimilarRecipes(this.recipeIdSimilar);
  }

  takeSimilarRecipes(id: number) {
    this.service
      .takeSimilarRecipe(id)
      .pipe(
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe((data: any) => {
        this.similarRecipes = data.slice(0, 3);
      });
  }

  reloadPage() {
    setTimeout(() => {
      window.location.reload();
    }, 1);
  }
}
