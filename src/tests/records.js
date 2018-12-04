import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import { describe, it } from 'mocha';

import app from '../app';

chai.use(chaiHttp);

describe('red-flags Controller', () => {
  it('should create new record', (done) => {
    chai
      .request(app)
      .post('/api/v1/red-flags')
      .set({
        'Content-type': 'application/json',
      })
      .send({
        name: 'Bribery and Corruption',
        type: 'redFlag',
        images: [
          'image.png',
          'image.jpg',
        ],
        videos: [
          'videos.mp4',
          'videos.avi',
        ],
        geolocation: '1.2343 -4.38938',
      })
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        expect(res.statusCode).to.equal(201);
        expect(res.body.data).to.be.an('array');
        expect(res.body.data.length).to.equal(1);
        expect(res.body.data[0].id).to.exist;
        expect(res.body.data[0].status).to.equal('pending');
        expect(res.body.status).to.equal(201);
        done();
      });
  });

  it('should not create without name', (done) => {
    chai
      .request(app)
      .post('/api/v1/red-flags')
      .set({
        'Content-type': 'application/json',
      })
      .send({
        name: '',
        type: 'redFlag',
        images: [
          'image.png',
          'image.jpg',
        ],
        videos: [
          'videos.mp4',
          'videos.avi',
        ],
        geolocation: '1.2343 -4.38938',
      })
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        expect(res.statusCode).to.equal(400);
        expect(res.body.error).to.equal('Please provide a valid record name');
        expect(res.body.status).to.equal(400);
        done();
      });
  });

  it('should not create without type', (done) => {
    chai
      .request(app)
      .post('/api/v1/red-flags')
      .set({
        'Content-type': 'application/json',
      })
      .send({
        name: 'Bribery and Corruption',
        type: '',
        images: [
          'image.png',
          'image.jpg',
        ],
        videos: [
          'videos.mp4',
          'videos.avi',
        ],
        geolocation: '1.2343 -4.38938',
      })
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        expect(res.statusCode).to.equal(400);
        expect(res.body.error).to.equal('Please provide a valid record type');
        expect(res.body.status).to.equal(400);
        done();
      });
  });

  it('should not create without geolocation', (done) => {
    chai
      .request(app)
      .post('/api/v1/red-flags')
      .set({
        'Content-type': 'application/json',
      })
      .send({
        name: 'Bad roads',
        type: 'intervention',
        images: [],
        videos: [],
        geolocation: '',
      })
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        expect(res.statusCode).to.equal(400);
        expect(res.body.error).to.equal('Please provide a valid location');
        expect(res.body.status).to.equal(400);
        done();
      });
  });

  it('should create without image or video', (done) => {
    chai
      .request(app)
      .post('/api/v1/red-flags')
      .set({
        'Content-type': 'application/json',
      })
      .send({
        name: 'Bribery and Corruption',
        type: 'redFlag',
        images: [],
        videos: [],
        geolocation: '1.2343 -4.38938',
      })
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        expect(res.statusCode).to.equal(201);
        expect(res.body.data).to.be.an('array');
        expect(res.body.data.length).to.equal(1);
        expect(res.body.data[0].id).to.exist;
        expect(res.body.data[0].status).to.equal('pending');
        expect(res.body.status).to.equal(201);
        done();
      });
  });

  describe('Get all red-flags', () => {
    it('should get all red-flags', (done) => {
      chai
        .request(app)
        .get('/api/v1/red-flags')
        .set({
          'Content-type': 'application/json',
        })
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.body).to.be.an('object');
          expect(res.statusCode).to.equal(201);
          expect(res.body.status).to.equal(201);
          expect(res.body.data).to.be.an('array');
          done();
        });
    });
  });

  describe('Get a specific record', () => {
    it('should get a specific record', (done) => {
      chai
        .request(app)
        .get('/api/v1/red-flags/:id')
        .set({
          'Content-type': 'application/json',
        })
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.body).to.be.an('object');
          expect(res.statusCode).to.equal(201);
          expect(res.body.status).to.equal(201);
          expect(res.body.data).to.be.an('array');
          expect(res.body.data.length).to.equal(1);
          done();
        });
    });
  });

  describe('Update a Record', () => {
    it('should update record', (done) => {
      chai
        .request(app)
        .patch('/api/v1/red-flags/:id')
        .set({
          'Content-type': 'application/json',
        })
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.body).to.be.an('object');
          done(err);
        });
    });
  });

  describe('Delete a Record', () => {
    it('should delete a record', (done) => {
      chai
        .request(app)
        .delete('/api/v1/red-flags/:id')
        .set({
          'Content-type': 'application/json',
        })
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.statusCode).to.be.equal(204);
          expect(res.status).to.equal(204);
          expect(res.body).to.be.an('object');
          done(err);
        });
    });
  });
});
