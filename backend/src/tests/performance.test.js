const request = require('supertest');
const app = require('../index'); // Korrigierter Importpfad

describe('Performance Tests', () => {
  it('sollte die API innerhalb von 200ms antworten', async () => {
    const start = Date.now();
    await request(app).get('/rewards');
    const duration = Date.now() - start;
    expect(duration).toBeLessThan(200);
  });
});
