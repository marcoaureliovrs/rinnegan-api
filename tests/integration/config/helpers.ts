import * as mocha from 'mocha';
import * as Chai from 'chai';
import * as td from 'testdouble';
const supertest = require('supertest');
//const App = require('../../../server/api/api');

import App from '../../../server/api/api';




const app = App;
const request = supertest;
const expect = Chai.expect;
const testDouble = td;

export { app, expect, request, testDouble };
