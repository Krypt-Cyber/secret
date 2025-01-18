const request = require('supertest');
const app = require('../index'); // Assuming your Express app is exported from index.js
const User = require('../models/User');

describe('User Authentication', () => {
    beforeAll(async () => {
        await User.deleteMany({}); // Clear the database before tests
    });

    it('should register a new user', async () => {
        const response = await request(app)
            .post('/api/auth/register')
            .send({
                username: 'testuser',
                password: 'password123',
                email: 'testuser@example.com'
            });
        expect(response.status).toBe(201);
        expect(response.text).toBe('User registered');
    });

    it('should login an existing user', async () => {
        await request(app)
            .post('/api/auth/register')
            .send({
                username: 'testuser',
                password: 'password123',
                email: 'testuser@example.com'
            });

        const response = await request(app)
            .post('/api/auth/login')
            .send({
                username: 'testuser',
                password: 'password123'
            });
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('token');
    });

    it('should not login with invalid credentials', async () => {
        const response = await request(app)
            .post('/api/auth/login')
            .send({
                username: 'testuser',
                password: 'wrongpassword'
            });
        expect(response.status).toBe(400);
        expect(response.text).toBe('Invalid credentials');
    });
});
