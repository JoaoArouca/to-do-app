/* eslint-disable @typescript-eslint/no-unused-vars */
import * as sinon from 'sinon'
import chai from 'chai'
import chaiHttp = require('chai-http');

import app from '../app';

import { describe, it } from 'mocha';
import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('User Controller - Test', () => {
  let chaiHttpResponde: Response

  it('Registrou novo usuário com sucesso', async () => {
    const chaiHttpResponde = await chai.request(app).post('/register');

    expect(chaiHttpResponde.status).to.be.eq(201)
  })
})