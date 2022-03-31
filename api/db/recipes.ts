import db from './connection';

export default class Recipes {
  static async getAll() {
    try {
      const result = await db.query('SELECT * from recipes');
      return result.rows;
    } catch (error) {
      throw new Error('Unable to retrieve all recipes.');
    }
  }
}
