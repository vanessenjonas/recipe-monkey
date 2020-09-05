import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Recipe } from '../shared/recipe';
import {RecipeStoreService} from "../shared/recipe-store.service";

@Component({
  selector: 'rm-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
  @Output()
  showDetailsEvent = new EventEmitter<Recipe>();

  constructor(private rs: RecipeStoreService) { }

  ngOnInit(): void {
    this.recipes = this.rs.getAll();
  }

  showDetails(recipe: Recipe) {
    this.showDetailsEvent.emit(recipe);
  }

}
