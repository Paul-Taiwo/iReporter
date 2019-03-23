const { Pool } = require('pg');
const dotenv = require('dotenv');
const log = require('fancy-log');

const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});

dotenv.config();


pool.on('connect', () => {
  log.info('connected to the db');
});

const userTable = () => {
  const queryText = `CREATE TABLE IF NOT EXIST
  users(
    ID SERIAL,
    firstname VARCHAR(225) NOT NULL,
    lastname VARCHAR(225) NOT NULL,
    othernames VARCHAR(225) NOT NULL,
    email VARCHAR(225) NOT NULL,
    "phoneNumber" VARCHAR(225) NOT NULL,
    username VARCHAR(225) NOT NULL,
    registered DATE NOT NULL,
    "isAdmin" BOOLEAN,
    CONSTRAINT user_pkey PRIMARY KEY(ID)
  )`;
  pool.query(queryText)
    .then((res) => {
      log.info(res);
      pool.end();
    })
    .catch((err) => {
      log.error(err);
      pool.end();
    });
};

const incident = () => {
  const queryText = `CREATE TYPE rec_status as ENUM('draft', 'under investigation', 'resolved', 'rejected');
  CREATE TABLE IF NOT EXISTS
  records(
    ID SERIAL,
    "createdOn" DATE,
    "createdBy" INT references users(ID),
    type VARCHAR(225) NOT NULL,
    location VARCHAR(225) NOT NULL,
    status rec_status,
    "images" VARCHAR(225),
    "videos" VARCHAR(255),
    comment VARCHAR(225) NOT NULL
  )`;

  pool.query(queryText)
    .then((res) => {
      log.info(res);
      pool.end();
    })
    .catch((err) => {
      log.error(err);
      pool.end();
    });
};

const dropTable = () => {
  const queryText = 'DROP TABLE IF EXISTS reflections';

  pool.query(queryText)
    .then((res) => {
      log.info(res);
      pool.end();
    })
    .catch((err) => {
      log.error(err);
      pool.end();
    });
};

pool.on('remove', () => {
  log.info('Client Removed');
  process.exit(0);
});

module.exports = {
  userTable,
  dropTable,
  incident,
};

require('make-runnable');
