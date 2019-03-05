import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import db from '../db/index';

dotenv.config();

class Auth {
  static register(req, res) {
    const {
      firstname, lastname, othernames, email, password, phoneNumber, username,
    } = req.body;

    db.query('SELECT * FROM users WHERE email = $1', [email])
      .then((firstResult) => {
        if (firstResult.rowCount >= 1) {
          res.status(400).json({
            status: 400,
            error: 'Email is already registered',
          });
        } else {
          const encryptedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync());
          const query = 'INSERT INTO users(id, firstname, lastname, othernames, email, username, password, "phoneNumber", registered, "isAdmin") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING id, firstname, lastname, othernames, email, username, "phoneNumber", "isAdmin", registered';
          const userData = [
            1000,
            firstname,
            lastname,
            othernames,
            email,
            username,
            encryptedPassword,
            phoneNumber,
            new Date().toISOString(),
            false,
          ];

          db.query(query, userData)
            .then((secondResult) => {
              const user = {
                id: secondResult.rows[0].id,
                firstname: secondResult.rows[0].firstname,
                lastname: secondResult.rows[0].lastname,
                othernames: secondResult.rows[0].othernames,
                email: secondResult.rows[0].email,
                phoneNumber: secondResult.rows[0].phoneNumber,
                username: secondResult.rows[0].username,
                registered: secondResult.rows[0].registered,
                isAdmin: secondResult.rows[0].isAdmin,
              };

              const token = jwt.sign({ user }, process.env.SECRETKEY, { expiresIn: '24h' });
              res.status(201).json({
                status: 201,
                data: [{
                  token,
                  user,
                }],
              });
            })
            .catch((err) => {
              res.status(500).json({
                status: 500,
                error: err,
              });
            });
        }
      })
      .catch((err) => {
        res.status(500).json({
          status: 500,
          error: err,
        });
      });
  }

  // static login {
  //   const { email, password } = req.body;
  // }
}

export default Auth;
