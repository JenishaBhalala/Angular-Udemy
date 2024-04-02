
import { Ingredient } from './../shared/ingredient.model';
import { Subject } from 'rxjs';


export class ShoppingListService {

    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();

    private ingredients: Ingredient[] = [
        new Ingredient('Watermelon', 5),
        new Ingredient('Pineapples', 7),
        new Ingredient('Apples', 10),
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    getIngredient(index: number) {
        return this.ingredients[index];
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
    //     for (let ingredient of ingredients) {
    //         this.addIngredient(ingredient);
    //     }
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(ingredients.slice());
    }

    updateIngredient(index: number, newIngredient: Ingredient) {
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    deleteIngredient(index: number) {
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}

// *ngFor="let ingredientCtrl of recipeForm.get('ingredients').controls; let i = index"


// get controls() { // a getter!
//     return (<FormArray>this.recipeForm.get('ingredients')).controls;
//   }

// *ngFor="let ingredientCtrl of controls; let i = index"