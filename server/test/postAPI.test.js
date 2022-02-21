let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');

// Assertion Style
chai.should();

chai.use(chaiHttp);

describe('Post API', () => {
  // // Test: GET route
  describe('GET /api/post', () => {
    it('It should GET an entire post list', (done) => {
      chai
        .request(server)
        .get('/api/post')
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.a('array');
          done();
        });
    });
    it('It should throw 404 with invalid url', (done) => {
      chai
        .request(server)
        .get('/api/posts')
        .end((err, response) => {
          response.should.have.status(404);
          done();
        });
    });
  });

  // Test GET by id route
  describe('GET /api/post/:id', () => {
    it('It should GET post by ID', (done) => {
      const testID = '6211b961c8dcda2902459366';
      chai
        .request(server)
        .get('/api/post/' + testID)
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.an('object');
          response.body.should.have.property('_id');
          response.body.should.have.property('title');
          response.body.should.have.property('content');
          response.body.should.have.property('created');
          response.body.should.have.property('_id').eq(testID);
          // category and image are optional
          done();
        });
    });
    it('It should throw 404 with invalid ID', (done) => {
      const testID = '7777';
      chai
        .request(server)
        .get('/api/post/' + testID)
        .end((err, response) => {
          response.should.have.status(404);
          done();
        });
    });
  });
});

// TODO:
// Test Post route
// Test PATCH route
// Test DELETE route
