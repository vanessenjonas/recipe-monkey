import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { Recipe } from "../shared/recipe";
import {RecipeStoreService} from "../shared/recipe-store.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'rm-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  @Output() showListEvent = new EventEmitter<any>();

  recipe: Recipe;

  constructor(private rs: RecipeStoreService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.route.snapshot.paramMap;
    this.recipe = this.rs.getSingle(params.get('id'))
  }

  getRating(num: number) {
    return new Array(num);
  }

  showRecipeList() {
    this.showListEvent.emit();
  }

}
