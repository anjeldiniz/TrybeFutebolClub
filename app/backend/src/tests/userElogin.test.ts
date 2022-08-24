import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import User from '../database/models/user';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

const mockUser = {
    username: 'Admin',
    role: 'admin',
    email: 'admin@admin.com',
    password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW'
}

const mockToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJpZCI6MSwiaWF0IjoxNjYxMzAwMDExfQ.3CLgw_Q55sljeylhUGFy0OqASJtCAVStabCOUo5sv_0';


describe('Test the router login', () => {
  let chaiHttpResponse: Response;

  beforeEach(async () => {
    sinon
      .stub(User, "findOne")
      .resolves(mockUser as User);
  });

  afterEach(()=>{
    (User.findOne as sinon.SinonStub).restore();
  })

  it('is possible login', async () => {
    chaiHttpResponse = await chai
       .request(app)
       .post('/login')
       .send({ email: 'admin@admin.com', password: 'secret_admin' });
      const { token } = chaiHttpResponse.body;
      const { status } = chaiHttpResponse;
    expect(token).to.exist;
    expect(status).to.equal(200);
  });

  it('dont have password', async () => {
    chaiHttpResponse = await chai
    .request(app)
    .post('/login')
    .send({ email: 'admin@admin.com', password: '' });
   const { message } = chaiHttpResponse.body;
   const { status } = chaiHttpResponse;
   expect(message).to.equal('All fields must be fielld');
   expect(status).to.equal(400);
  });

  it('password is incorrect', async () => {
    chaiHttpResponse = await chai
       .request(app)
       .post('/login')
       .send({ email: 'admin@admin.com', password: 'incorrect_password' });
      const { message } = chaiHttpResponse.body;
      const { status } = chaiHttpResponse;
      expect(message).to.equal('Incorrect email or password');
      expect(status).to.equal(401);
  });

  it('token is validate', async () => {
    chaiHttpResponse = await chai
       .request(app)
       .post('/login/validate')
       .set('authorization', mockToken) 
       .send();
      const { role } = chaiHttpResponse.body;
      const { status } = chaiHttpResponse;
      expect(role).to.equal('admin');
      expect(status).to.equal(200);
  });

  it('token is not found', async () => {
    chaiHttpResponse = await chai
       .request(app)
       .post('/login/validate')
       .send();
      const { status } = chaiHttpResponse;
      expect(status).to.equal(401);
  });
});
