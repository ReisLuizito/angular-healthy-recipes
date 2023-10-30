import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { SearchComponent } from './components/pages/search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { FoodCardComponent } from './components/pages/home/food-card/food-card.component';
import { SingleRecipeComponent } from './components/pages/single-recipe/single-recipe.component';
import { MainInformationComponent } from './components/pages/single-recipe/main-information/main-information.component';
import { SimilarRecipesComponent } from './components/pages/single-recipe/main-information/similar-recipes/similar-recipes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    SearchComponent,
    FoodCardComponent,
    SingleRecipeComponent,
    MainInformationComponent,
    SimilarRecipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
