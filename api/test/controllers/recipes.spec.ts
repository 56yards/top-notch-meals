import Recipe from '../../src/controllers/recipes';
import Recipes from '../../src/db/recipes';

jest.mock('../../src/db/recipes');

const recipes = [{ id: 1, name: 'Chocolate Cake' }, { id: 2, name: 'Pancakes' }];
const newRecipe = { id: 100, name: 'Cottage Pie' };

const req: any = {
  params: {
    id: jest.fn().mockRejectedValue('1'),
  },
  body: jest.fn().mockReturnValue({
    name: 'foo',
    ingredients: 'bar',
    method: 'yoyo',
  }),
};
const res: any = {
  status: jest.fn(),
  send: jest.fn(),
};

beforeEach(() => {
  jest.clearAllMocks();
  Recipes.getAll = jest.fn().mockReturnValue({ rows: recipes });
  Recipes.get = jest.fn().mockReturnValue(recipes[0]);
  Recipes.save = jest.fn().mockReturnValue(newRecipe);
});

describe('handleAll() : ', () => {
  test('should make a call to retrieve all recipes', async () => {
    await Recipe.handleAll(req, res);
    expect(Recipes.getAll).toHaveBeenCalled();
  });

  test('should return a response status code of 200', async () => {
    await Recipe.handleAll(req, res);
    expect(res.status).toBeCalledWith(200);
  });

  test('should return recipes as json in the response', async () => {
    await Recipe.handleAll(req, res);
    expect(res.send).toHaveBeenCalledWith(JSON.stringify({ rows: recipes }));
  });
});

describe('handleGet() : ', () => {
  test('should make a call to retrieve a single recipe', async () => {
    await Recipe.handleGet(req, res);
    expect(Recipes.get).toHaveBeenCalled();
  });

  test('should return a response status code of 200', async () => {
    await Recipe.handleGet(req, res);
    expect(res.status).toBeCalledWith(200);
  });

  test('should return recipes as json in the response', async () => {
    await Recipe.handleGet(req, res);
    expect(res.send).toHaveBeenCalledWith(JSON.stringify(recipes[0]));
  });
});

describe('handleCreate() : ', () => {
  test('should make a call to save a new recipe', async () => {
    await Recipe.handleCreate(req, res);
    expect(Recipes.save).toHaveBeenCalled();
  });

  test('should return a response status code of 200', async () => {
    await Recipe.handleCreate(req, res);
    expect(res.status).toBeCalledWith(200);
  });

  test('should return new recipe as json in the response', async () => {
    await Recipe.handleCreate(req, res);
    expect(res.send).toHaveBeenCalledWith(JSON.stringify(newRecipe));
  });
});
