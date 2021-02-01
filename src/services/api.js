import axios from 'axios';

import {API} from '../config/constants';

const request = axios.create({
  baseURL: API
});

// List of all base endpoints:
const ENDPOINTS = {
  JOKES: '/jokes',
};

/**
 * JOKES endpoint function calls.
 */
const jokes = {
  fetchAll: () => {
    return request.get(`${ENDPOINTS.JOKES}/categories`);
  },

  getByCategory: (category) => {
    return request.get(`${ENDPOINTS.JOKES}/random?category=${category}`);
  },
};

export {
  jokes,
};
