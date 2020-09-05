import { Injectable } from '@angular/core';
import {Recipe} from "./recipe";

@Injectable({
  providedIn: 'root'
})
export class RecipeStoreService {
  recipes: Recipe[];



  constructor() {
    this.recipes = [
      {
        id: '1',
        title: 'Spaghetti Bolognese',
        subtitle: 'a la Nonna',
        timeTotal: 30,
        recipeYield: 4,
        images: [{
          url: '../../assets/spaghetti-bolognese.jpg',
          title: 'bild'
        }],
        ingredients: ['Hackfleisch','Zwieblen','Karotten'],
        instructions: ['Zwiebeln schneidern', 'Fleisch anbraten'],
        published: new Date(2020,8,11)
      },
      {
        id: '2',
        title: 'Spaghetti Carbonara',
        subtitle: 'al Nonno',
        timeTotal: 40,
        recipeYield: 2,
        images: [{
          url: '../../assets/spaghetti-carbonara.jpeg',
          title: 'bild'
        }],
        ingredients: ['Speck','Zwieblen','Eier'],
        instructions: ['Zwiebeln schneider', 'Speck anbraten'],
        published: new Date(2020,8,12)
      }
    ]
  }

  getAll(): Recipe[]{
    return this.recipes;
  }

  getSingle(id: String): Recipe {
    return this.recipes.find(recipe => recipe.id === id);
  }
}
