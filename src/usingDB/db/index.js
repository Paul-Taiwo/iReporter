import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
  user: process.env.PGUSER,
  database: process.env.PGDATABASE,
  host: process.env.PGHOST,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});

// export default {
//   query(text, params) {
//     return new Promise((resolve, reject) => {
//       pool.query(text, params)
//         .then((res) => {
//           resolve(res);
//         })
//         .catch((res) => {
//           reject(res);
//         });
//     });
//   },
// };

export default pool;
