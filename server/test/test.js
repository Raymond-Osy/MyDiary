import chaiHttp from 'chai-http';
import chai, { expect } from 'chai';
import app from '../app';

/* eslint-disable no-unused-vars */
const should = chai.should();

chai.use(chaiHttp);

describe('Get a non existing url/page', () => {
  it('Should return a 404 for unknown routes', (done) => {
    chai.request(app)
      .get('/invalid/route')
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });
});

describe('Get all diary entries from database', () => {
  it('Should get all entries from database', (done) => {
    chai.request(app)
      .get('/api/v1/entries')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
});

describe('Get a specified entry from the database', () => {
  it('Should get one specific entry by ID', (done) => {
    chai.request(app)
      .get('/api/v1/entries/1')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        done();
      });
  });
});

describe('Create a New Entry', () => {
  const newEntry = {
    entryContent: 'This is a new entry content',
    dateTime: 'In the future',
    userId: 100
  };
  it('Should add a new entry to the database', (done) => {
    chai.request(app)
      .post('/api/v1/entries').send(newEntry)
      .end((err, res) => {
        expect(res).to.have.status(201);
        done();
      });
  });
});

describe('Modify an Entry', () => {
  const newEntry = {
    entryContent: 'This is a new entry content',
    dateTime: 'In the future',
    userId: 100
  };
  it('Should modify the entry', (done) => {
    chai.request(app)
      .put('/api/v1/entries/1').send({
        entryContent: 'Updated Entry Content',
      })
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
});
