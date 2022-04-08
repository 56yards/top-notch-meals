import Recipes from '../../src/db/recipes';
import db from '../../src/db/connection';
import config from '../../config';

jest.mock('../../src/db/connection');

const recipes = [{ id: 1, name: 'Chocolate Cake' }, { id: 2, name: 'Pancakes' }];

beforeEach(() => {
  jest.clearAllMocks();
  db.query = jest.fn().mockReturnValue({
    rows: recipes,
  });
});

describe('Get all Recipes', () => {
  test('should make a call to the database with the retrieve all recipes query', async () => {
    await Recipes.getAll();
    expect(db.query).toHaveBeenCalled();
    expect(db.query).toHaveBeenCalledWith(config.queries.recipesAll);
  });

  test('should return all recipes', async () => {
    const result = await Recipes.getAll();
    expect(result).toEqual(recipes);
  });
});

describe('Get single Recipe', () => {
  test('should make a call to the database with the retrieve single recipe query', async () => {
    await Recipes.get(2);
    expect(db.query).toHaveBeenCalled();
    expect(db.query).toHaveBeenCalledWith(config.queries.recipesGet, [2]);
  });

  test('should return a single recipe', async () => {
    const result = await Recipes.get(1);
    expect(result).toEqual(recipes[0]);
  });
});

describe('Save a new Recipe', () => {
  test('should make a call to the database with the correct paramters to save a new recipe', async () => {
    await Recipes.save('Sunday Roast', 'Potatoes, Carrots, Broccoli', 'Boil the Potatoes, Steam the Veg');
    expect(db.query).toHaveBeenCalled();
    expect(db.query).toHaveBeenCalledWith(config.queries.recipesNew, [
      'Sunday Roast',
      'Potatoes, Carrots, Broccoli',
      'Boil the Potatoes, Steam the Veg',
    ]);
  });

  test('should return a single recipe', async () => {
    const result = await Recipes.get(1);
    expect(result).toEqual(recipes[0]);
  });
});
