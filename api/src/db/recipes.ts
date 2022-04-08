import db from './connection';
import config from '../../config';

export default class Recipes {
  static async getAll() {
    try {
      const result = await db.query(config.queries.recipesAll);
      return result.rows;
    } catch (error) {
      throw new Error('Unable to retrieve all recipes.');
    }
  }

  static async get(id: Number) {
    try {
      const result = await db.query(config.queries.recipesGet, [id]);

      if (result.rows.length > 0) {
        return result.rows[0];
      }

      return result.rows;
    } catch (error) {
      throw new Error(`Unable to retrieve recipe with id: ${id}`);
    }
  }

  static async save(name: String, ingredients: String, method: String) {
    try {
      const result = await db.query(config.queries.recipesNew, [name, ingredients, method]);

      if (result.rows.length > 0) {
        return result.rows[0];
      }

      return result.rows;
    } catch (error) {
      throw new Error('Unable to create a new recipe');
    }
  }
}
