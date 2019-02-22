import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
  user: 'PGUSER',
  database: 'PGDATABASE',
  host: 'PGHOST',
  password: 'PGPASSWORD',
  port: 'PGPORT',
});

export default {
  query(text, params) {
    return new Promise((resolve, reject) => {
      pool.query(text, params)
        .then((res) => {
          resolve(res);
        })
        .catch((res) => {
          reject(res);
        });
    });
  },
};
