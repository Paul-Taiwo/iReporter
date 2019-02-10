const { Pool } = require('pg');
const dotenv = require('dotenv');

const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});

dotenv.config();


pool.on('connect', () => {
  console.log('connected to the db');
});

const userTable = () => {
  const queryText = `CREATE TABLE IF NOT EXISTS
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
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log('========>', err);
      pool.end();
    });
};

const incident = () => {
  const queryText = `CREATE TYPE rec_status as ENUM(draft, under investigation, resolved, rejected);
  CREATE TABLE IF NOT EXISTS
  records(
    ID SERIAL,
    "createdOn" DATE,
    "createdBy" INT references users(ID),
    type VARCHAR(225) NOT NULL,
    location VARCHAR(225) NOT NULL,
    status rec_status,
    images,
    videos,
    comment VARCHAR(225) NOT NULL
  )`;

  pool.query(queryText)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
};

const dropTable = () => {
  const queryText = 'DROP TABLE IF EXISTS reflections';

  pool.query(queryText)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
};

module.exports = {
  userTable,
  dropTable,
  incident,
};

require('make-runnable');
