// Services
import {jokes} from '../../../services/api';

// Types
import { SAVE_CATEGORIES } from './types';

/**
 * Save categories on store
 */
export const saveCategories = (categories) => {
  return {
    type: SAVE_CATEGORIES,
    payload: categories
  };
};

export const getJokesCategories = () => {
  return async (dispatch) => {
    const { data } = await jokes.fetchAll();
    dispatch(saveCategories(data));
    return data;
  };
};
