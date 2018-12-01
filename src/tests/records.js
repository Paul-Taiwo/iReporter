import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import { describe, it } from 'mocha';
import app from '../app';

chai.use(chaiHttp);

describe('Records Controller', () => {
  it('should create new record', (done) => {
    chai
      .request(app)
      .post('/api/v1/records')
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
      .post('/api/v1/records')
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
      .post('/api/v1/records')
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
      .post('/api/v1/records')
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
      .post('/api/v1/records')
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
});

describe('Get all records', () => {
  it('should get all records', (done) => {
    chai
      .request(app)
      .get('/api/v1/records')
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
