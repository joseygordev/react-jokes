// Types
import SET_CONNECTION from './types';

/**
 * Set connection on store
 */
export const setConenctionOnStore = (status) => {
  return {
    type: SET_CONNECTION,
    payload: status
  };
};

export const setConenction = (status) => {
  return (dispatch) => {
    dispatch(setConenctionOnStore(status));
  };
};