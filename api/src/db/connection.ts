import { Pool } from 'pg';
import config from '../../config';

const db = new Pool({
  user: config.dbUser,
  host: config.dbHost,
  database: config.dbName,
  password: config.dbPassword,
  port: config.dbPort,
});

export default db;
