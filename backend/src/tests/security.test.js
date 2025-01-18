const request = require('supertest');
const app = require('../index'); // Korrigierter Importpfad

describe('Sicherheitstests', () => {
  it('sollte vor SQL-Injection geschützt sein', async () => {
    const response = await request(app)
      .post('/contribute')
      .send({ viewerAddress: '0x123; DROP TABLE users;', amount: 10 });
    expect(response.statusCode).toBe(400); // Erwartet, dass die Anfrage abgelehnt wird
  });

  it('sollte vor XSS-Angriffen geschützt sein', async () => {
    const response = await request(app)
      .post('/contribute')
      .send({ viewerAddress: '<script>alert("XSS")</script>', amount: 10 });
    expect(response.statusCode).toBe(400); // Erwartet, dass die Anfrage abgelehnt wird
  });
});
