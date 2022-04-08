import { Request, Response } from 'express';
import Recipes from '../db/recipes';

export default class RecipeController {
  static async handleAll(req: Request, res: Response) {
    const allRecipes = await Recipes.getAll();

    if (allRecipes instanceof Error) {
      throw allRecipes;
    }

    res.status(200);
    res.send(JSON.stringify(allRecipes));
  }

  static async handleGet(req: Request, res: Response) {
    const id = parseInt(req.params.id as string, 10);

    const recipe = await Recipes.get(id);

    if (recipe instanceof Error) {
      throw recipe;
    }

    res.status(200);
    res.send(JSON.stringify(recipe));
  }

  static async handleCreate(req: Request, res: Response) {
    const { name, ingredients, method } = req.body;
    const newRecipe = await Recipes.save(name, ingredients, method);

    if (newRecipe instanceof Error) {
      throw newRecipe;
    }

    res.status(200);
    res.send(JSON.stringify(newRecipe));
  }
}
