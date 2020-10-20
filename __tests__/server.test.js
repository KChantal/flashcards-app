const request = require('supertest');
const app = require('../server/server.js');

describe('Server test', () => {
  it('should respond successfully', (done) => {
    return request(app).get('/').expect(200, done);
  })
});