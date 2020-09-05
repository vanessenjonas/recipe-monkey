import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from "../shared/recipe";

@Component({
  selector: 'rm-recipe-list-item',
  templateUrl: './recipe-list-item.component.html',
  styleUrls: ['./recipe-list-item.component.css']
})
export class RecipeListItemComponent implements OnInit {

  @Input() recipe: Recipe;

  constructor() { }

  ngOnInit(): void {
  }

}
