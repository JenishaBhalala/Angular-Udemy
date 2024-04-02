import { Injectable } from "@angular/core";

import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";

@Injectable()
export class RecipeService {

  recipesChanged = new Subject<Recipe[]>();

    
    // private recipes: Recipe[] = [
    //   new Recipe(
    //     'Burger', 
    //     'Scrumptious & Big-Bang Burger', 
    //     'https://www.greenchickchop.in/cdn/shop/files/VegBurger_result.webp?v=1682662330',
    //     [
    //       new Ingredient('Buns', 2),
    //       new Ingredient('Cheese', 4),
    //       new Ingredient('Raw Vegetables', 8)
    //     ]),
    //     new Recipe(
    //       'Peri Peri Fries',
    //       'Delicious & Spicy Fries',
    //       'https://jaipurcakengifts.com/images/thumbs/000/0001532_peri-peri-french-fries_550.webp',
    //     [
    //       new Ingredient('Potato', 5),
    //       new Ingredient('Peri Peri Masala', 2)
    //     ]),
    //     new Recipe(
    //       'Pizza',
    //       'Mouth-watering Pizza',
    //       'https://www.cremeux.in/wp-content/uploads/2023/07/Premium-veggie-2-copy.jpg',
    //     [
    //       new Ingredient('Pizza-bread', 1),
    //       new Ingredient('Mozzarella', 5)
    //     ]),
    //     new Recipe(
    //       'Tiramisu',
    //       'Italian Dessert',
    //       'https://loperaindia.com/wp-content/uploads/2019/07/Tiramisu-Individual-.jpg',
    //     [
    //       new Ingredient('Coffee', 4),
    //       new Ingredient('Cocoa Powder', 8)
    //     ]),
    //     new Recipe(
      //       'Noodles',
      //       'asty & Spicy Noodle-Woodle',
      //       'https://images.immediate.co.uk/production/volatile/sites/2/2022/08/Vegetable-hakka-noodles-3985c8b.jpg?resize=800%2C419',
      //     [
      //       new Ingredient('Raw Noodles', 1),
      //       new Ingredient('Garlic & Onions', 2)
      //       new Ingredient('Soya Sauce', 1)
      //     ]), 
    //   ]; 

    private recipes: Recipe[] = [];

      constructor( private slService: ShoppingListService) {}

      setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
      }

      getRecipes() {
        return this.recipes.slice();
      }

      getRecipe(index: number) {
        return this.recipes[index];
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
      }

      addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
      }

      updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
      }

      deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
      }
}
