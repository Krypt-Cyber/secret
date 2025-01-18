const request = require('supertest');
const app = require('../index'); // Korrigierter Importpfad

describe('API Endpunkte', () => {
  it('sollte die Mining-Aktivierung erfolgreich durchführen', async () => {
    const response = await request(app)
      .post('/activate-mining')
      .send({ viewerCount: 150 });
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Mining-System aktiviert.');
  });

  it('sollte einen Fehler zurückgeben, wenn weniger als 100 Zuschauer', async () => {
    const response = await request(app)
      .post('/activate-mining')
      .send({ viewerCount: 50 });
    expect(response.statusCode).toBe(400);
    expect(response.text).toBe('Mindestens 100 Zuschauer erforderlich, um das Mining-System zu aktivieren.');
  });

  it('sollte einen Beitrag erfolgreich hinzufügen', async () => {
    const response = await request(app)
      .post('/contribute')
      .send({ viewerAddress: '0x123', amount: 10 });
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Beitrag erfolgreich.');
  });

  it('sollte die Belohnungen erfolgreich abrufen', async () => {
    const response = await request(app)
      .get('/rewards');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('0x123');
  });
});
