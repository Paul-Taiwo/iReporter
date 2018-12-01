import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

chai.use(chaiHttp);

describe('API Endpoints', () => {
  it('should return error if endpoint does not exist', (done) => {
    chai
      .request(app)
      .get('/api/v1/not')
      .set({
        'Content-type': 'application/json',
      })
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        expect(res.statusCode).to.equal(404);
        expect(res.body.message).equal('Not found');
        expect(res.body.status).to.equal('error');
        done();
      });
  });

  it('should return success if endpoint exist', (done) => {
    chai
      .request(app)
      .get('/api/v1')
      .set({
        'Content-type': 'application/json',
      })
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        expect(res.statusCode).to.equal(200);
        expect(res.body.message).to.equal('Welcome to iReporter API');
        expect(res.body.status).to.equal('success');
        done();
      });
  });
});
