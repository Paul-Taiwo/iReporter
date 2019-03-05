import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import { describe, it } from 'mocha';
import app from '../../app';

chai.use(chaiHttp);

describe('Testing endpoint', () => {
  it('Should create a user', (done) => {
    chai
      .request(app)
      .post('/api/v1/auth/signup')
      .set({
        'Content-type': 'application/json',
      })
      .send({
        firstname: 'Gayya',
        lastname: 'Adedokun',
        othernames: 'Taiwo',
        phoneNumber: '08108268238',
        username: 'Paulot',
        email: 'paula@gmail.com',
        password: 'abcdefgh',
      })
      .end((err, res) => {
        expect(err).to.equal(null);
        expect(res.statusCode).to.be.equal(201);
        expect(res.body.status).to.be.equal(201);
        expect(res.body.data[0].token).to.exist;
        expect(res.body.data[0].user.id).to.exist;
        done();
      });
  });
});

describe('Testing Validations', () => {
  it('Should return an error if firstname is empty', (done) => {
    chai
      .request(app)
      .post('/api/v1/auth/signup')
      .set({
        'Content-type': 'application/json',
      })
      .send({
        firstname: '',
        lastname: 'Adedokun',
        othernames: 'Taiwo',
        phoneNumber: '',
        username: 'latty',
        email: 'lattyy@gmail.com',
        password: 'abcdefh',
      })
      .end((err, res) => {
        expect(err).to.equal(null);
        expect(res.statusCode).to.equal(400);
        expect(res.body.status).to.equal(400);
        expect(res.body.message).to.equal('Name fields cannot be empty');
        done();
      });
  });

  it('Should return an error if lastname is empty', (done) => {
    chai
      .request(app)
      .post('/api/v1/auth/signup')
      .set({
        'Content-type': 'application/json',
      })
      .send({
        firstname: 'Paul',
        lastname: '',
        othernames: 'Taiwo',
        phoneNumber: '',
        username: 'latty',
        email: 'lattyy@gmail.com',
        password: 'abcdefh',
      })
      .end((err, res) => {
        expect(err).to.equal(null);
        expect(res.statusCode).to.equal(400);
        expect(res.body.status).to.equal(400);
        expect(res.body.message).to.equal('Name fields cannot be empty');
        done();
      });
  });

  it('Should return an error if othernames is empty', (done) => {
    chai
      .request(app)
      .post('/api/v1/auth/signup')
      .set({
        'Content-type': 'application/json',
      })
      .send({
        firstname: 'Paul',
        lastname: 'Adedokun',
        othernames: '',
        phoneNumber: '',
        username: 'latty',
        email: 'lattyy@gmail.com',
        password: 'abcdefh',
      })
      .end((err, res) => {
        expect(err).to.equal(null);
        expect(res.statusCode).to.equal(400);
        expect(res.body.status).to.equal(400);
        expect(res.body.message).to.equal('Name fields cannot be empty');
        done();
      });
  });

  it('Should return an error if firstname is less than 2 characters', (done) => {
    chai
      .request(app)
      .post('/api/v1/auth/signup')
      .set({
        'Content-type': 'application/json',
      })
      .send({
        firstname: 'P',
        lastname: 'Adedokun',
        othernames: 'Taiwo',
        phoneNumber: '',
        username: 'latty',
        email: 'lattyy@gmail.com',
        password: 'abcdefh',
      })
      .end((err, res) => {
        expect(err).to.equal(null);
        expect(res.statusCode).to.equal(400);
        expect(res.body.status).to.equal(400);
        expect(res.body.message).to.equal('Name fields cannot be less than two characters');
        done();
      });
  });

  it('Should return an error if lastname is less than 2 characters', (done) => {
    chai
      .request(app)
      .post('/api/v1/auth/signup')
      .set({
        'Content-type': 'application/json',
      })
      .send({
        firstname: 'Paul',
        lastname: 'A',
        othernames: 'Taiwo',
        phoneNumber: '',
        username: 'latty',
        email: 'lattyy@gmail.com',
        password: 'abcdefh',
      })
      .end((err, res) => {
        expect(err).to.equal(null);
        expect(res.statusCode).to.equal(400);
        expect(res.body.status).to.equal(400);
        expect(res.body.message).to.equal('Name fields cannot be less than two characters');
        done();
      });
  });

  it('Should return an error if othernames is less than 2 characters', (done) => {
    chai
      .request(app)
      .post('/api/v1/auth/signup')
      .set({
        'Content-type': 'application/json',
      })
      .send({
        firstname: 'Paul',
        lastname: 'Adedokun',
        othernames: 'T',
        phoneNumber: '',
        username: 'latty',
        email: 'lattyy@gmail.com',
        password: 'abcdefh',
      })
      .end((err, res) => {
        expect(err).to.equal(null);
        expect(res.statusCode).to.equal(400);
        expect(res.body.status).to.equal(400);
        expect(res.body.message).to.equal('Name fields cannot be less than two characters');
        done();
      });
  });

  it('Should return an error if username is empty', (done) => {
    chai
      .request(app)
      .post('/api/v1/auth/signup')
      .set({
        'Content-type': 'application/json',
      })
      .send({
        firstname: 'Paul',
        lastname: 'Adedokun',
        othernames: 'Taiwo',
        phoneNumber: '',
        username: '',
        email: 'lattyy@gmail.com',
        password: 'abcdefh',
      })
      .end((err, res) => {
        expect(err).to.equal(null);
        expect(res.statusCode).to.equal(400);
        expect(res.body.status).to.equal(400);
        expect(res.body.message).to.equal('Please input a username');
        done();
      });
  });

  it('Should return an error if password is empty', (done) => {
    chai
      .request(app)
      .post('/api/v1/auth/signup')
      .set({
        'Content-type': 'application/json',
      })
      .send({
        firstname: 'Paul',
        lastname: 'Adedokun',
        othernames: 'Taiwo',
        phoneNumber: '',
        username: 'latty',
        email: 'lattyy@gmail.com',
        password: '',
      })
      .end((err, res) => {
        expect(err).to.equal(null);
        expect(res.statusCode).to.equal(400);
        expect(res.body.status).to.equal(400);
        expect(res.body.message).to.equal('Password field cannot be empty');
        done();
      });
  });

  it('Should return an error if email is empty', (done) => {
    chai
      .request(app)
      .post('/api/v1/auth/signup')
      .set({
        'Content-type': 'application/json',
      })
      .send({
        firstname: 'Paul',
        lastname: 'Adedokun',
        othernames: 'Taiwo',
        phoneNumber: '',
        username: 'latty',
        email: '',
        password: 'abcdefgh',
      })
      .end((err, res) => {
        expect(err).to.equal(null);
        expect(res.statusCode).to.equal(400);
        expect(res.body.status).to.equal(400);
        expect(res.body.message).to.equal('Please input an email');
        done();
      });
  });

  it('Should return an error if passsword is less than 8 characters', (done) => {
    chai
      .request(app)
      .post('/api/v1/auth/signup')
      .set({
        'Content-type': 'application/json',
      })
      .send({
        firstname: 'Paul',
        lastname: 'Adedokun',
        othernames: 'Taiwo',
        phoneNumber: '',
        username: 'latty',
        email: 'lattyy@gmail.com',
        password: 'abcde',
      })
      .end((err, res) => {
        expect(err).to.equal(null);
        expect(res.statusCode).to.be.equal(400);
        expect(res.body.status).to.be.equal(400);
        expect(res.body.message).to.equal('Password cannot be less than 8 characters');
        done();
      });
  });
});

// describe('Testing endpoint', () => {
//   it('Should create a user', (done) => {
//     chai
//       .request(app)
//       .post('/api/v1/auth/signup')
//       .set({
//         'Content-type': 'application/json',
//       })
//       .send({
//         firstname: 'Gayya',
//         lastname: 'Adedokun',
//         othernames: 'Taiwo',
//         phoneNumber: '08108268238',
//         username: 'Paulot',
//         email: 'paula@gmail.com',
//         password: 'abcdefgh',
//       })
//       .end((err, res) => {
//         expect(err).to.equal(null);
//         expect(res.statusCode).to.be.equal(201);
//         expect(res.body.status).to.be.equal(201);
//         done();
//       });
//   });
// });
