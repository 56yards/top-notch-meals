import { Pool } from 'pg';

const db = new Pool({
  user: 'user',
  host: 'localhost',
  database: 'db',
  password: 'pass',
  port: 5436,
});

export default db;
