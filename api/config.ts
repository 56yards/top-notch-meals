export default {
  dbUser: process.env.DATABASE_USER,
  dbPassword: process.env.DATABASE_PASSWORD,
  dbName: process.env.DATABASE_NAME,
  dbPort: Number(process.env.DATABASE_PORT),
  dbHost: process.env.DATABASE_HOST,

  queries: {
    recipesAll: 'SELECT id, name, ingredients, method from recipes',
    recipesGet: 'SELECT id, name, ingredients, method from recipes WHERE id = $1',
    recipesNew: 'INSERT INTO recipes (name, ingredients, method) VALUES ($1, $2, $3) RETURNING *',
  },
};
