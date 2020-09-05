import { Component } from '@angular/core';
import { Recipe } from './shared/recipe'

@Component({
  selector: 'rm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'recipe-monkey';
  recipe: Recipe;


  viewState: ViewState = 'list';

  showList() {
    this.viewState = 'list';
  }

  showDetails(recipe: Recipe) {
    this.recipe = recipe;
    this.viewState = 'details';
  }

}

type ViewState = 'list' | 'details';
