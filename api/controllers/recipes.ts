import { Request, Response } from 'express';
import Recipes from '../db/recipes';

export default class RecipeController {
  static async handleGet(req: Request, res: Response) {
    const allRecipes = await Recipes.getAll();

    if (allRecipes instanceof Error) {
      throw allRecipes;
    }

    res.status(200).send(JSON.stringify(allRecipes));
  }

  static async handleNew(req: Request, res: Response) {

  }
}
