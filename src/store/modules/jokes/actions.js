// Services
import {jokes} from '../../../services/api';

// Types
import SAVE_JOKES from './types';
import { SAVE_JOKE_ID_BY_CATEGORY } from '../categories/types';

/**
 * Save jokes on store
 */
export const saveJokeIdByCategory = (category, id) => {
  return {
    type: SAVE_JOKE_ID_BY_CATEGORY,
    payload: {
      category,
      id
    }
  };
};

/**
 * Save jokes on store
 */
export const saveJokes = (joke) => {
  return {
    type: SAVE_JOKES,
    payload: joke
  };
};

export const getJokeByCategory = (category) => {
  return async (dispatch) => {
    const { data } = await jokes.getByCategory(category);
    dispatch(saveJokes(data));
    dispatch(saveJokeIdByCategory(category, data.id));
    return data;
  };
};
