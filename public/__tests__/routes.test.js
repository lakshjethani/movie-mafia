const request = require('supertest');
const express = require('express');
const axios = require('axios');
jest.mock('axios'); 

const app = express();
app.use(express.json());
app.use('/', require('../../routes/movies.js')); 

describe('Movie Mafia API Routes', () => {
  
  beforeEach(() => {
    axios.get.mockResolvedValue({
      data: {
        results: [{ title: 'Inception', genre_ids: [1, 2] }]
      }
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return 500 if API call fails', async () => {
    axios.get.mockRejectedValueOnce(new Error('API Error'));
    
    const response = await request(app).get('/');
    expect(response.status).toBe(500);
  });

  it('should return 500 if API call fails for movie details', async () => {
    axios.get.mockRejectedValueOnce(new Error('API Error'));

    const response = await request(app).get('/movie/1');
    expect(response.status).toBe(500);
  });

  it('should return 500 if API call fails for actor details', async () => {
    axios.get.mockRejectedValueOnce(new Error('API Error'));
    const response = await request(app).get('/actor/1');
    expect(response.status).toBe(500);
  });

  it('should return search results', async () => {
    axios.get.mockResolvedValueOnce({
      data: { results: [{ title: 'Inception' }] }
    });

    const response = await request(app).get('/search?q=Inception');
    expect(response.body.results.length).toBeGreaterThan(0);
    expect(response.body.results[0].title).toBe('Inception');
  });

});
